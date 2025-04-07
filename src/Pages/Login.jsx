import { useLoaderData, Form, useActionData, redirect } from "react-router";

export function loginLoader({ request }) {
    return new URL (request.url).searchParams.get('message');
}

export async function action({ request }) {
    const formData = await request.formData();    
    
    const response = await fetch('api/login', {
        method: 'post',
        body: JSON.stringify({
            email: formData.get('email'),
            password: formData.get('password')
        })
    })

    if(!response.ok) {
        throw {
            message: response.message,
            statusText: response.statusText,
            status: response.status
        }
    }

    const data = await response.json();

    localStorage.setItem('isLoggedIn', true);
    const redir = redirect('/my-learning');
    redir.body = true;
    return redir;

}

export default function Login() {
    const logInMessage = useLoaderData();

    const actionData = useActionData();
    console.log(actionData);

    
    return (
        <main className="login-main">
            <h1 className="headline">Sign in to your account</h1>
            {logInMessage &&
                <p className="title">{logInMessage}</p>
            }
            <Form className="login-form" method="post">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email"
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password"
                />
                <button 
                    className='primary-button'
                >
                    Log in
                </button>
            </Form>
        </main>
    )
}