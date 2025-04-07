import { useLoaderData, Form, useActionData, redirect } from "react-router";

export function loginLoader({ request }) {
    return new URL (request.url).searchParams.get('message');
}

export async function action({ request }) {
    const formData = await request.formData();    
    
    try {
        const response = await fetch('api/login', {
            method: 'post',
            body: JSON.stringify({
                email: formData.get('email'),
                password: formData.get('password')
            })
        })

        const data = await response.json();

        if(!response.ok) {
            throw {
                message: data.error,
                statusText: response.statusText,
                status: response.status
            }
        }

        localStorage.setItem('isLoggedIn', true);
        const redir = redirect('/my-learning');
        redir.body = true;
        return redir;
    } catch (error) {
        return error.message;
    }
}

export default function Login() {
    const logInMessage = useLoaderData();
    const actionData = useActionData();

    return (
        <main className="login-main">
            <h1 className="headline">Sign in to your account</h1>
            {
                logInMessage && <p className="title error-message" >{logInMessage}</p>
            }
            {
                actionData && <p className="label error-message" >{actionData}</p>
            }
            <Form 
                className="login-form" 
                method="post"
                replace
            >
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