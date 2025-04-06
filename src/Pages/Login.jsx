import { useLoaderData } from "react-router";

export function loginLoader({ request }) {
    return new URL (request.url).searchParams.get('message');
}

export default function Login() {
    const logInMessage = useLoaderData();

    async function signIn(formData) {
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
                message: data.message,
                statusText: response.statusText,
                status: response.status
            }
        }

        console.log (data);
    }

    return (
        <main className="login-main">
            <h1 className="headline">Sign in to your account</h1>
            {logInMessage &&
                <p className="title">{logInMessage}</p>
            }
            <form action={signIn} className="login-form">
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
                <button className="primary-button">Log in</button>
            </form>
        </main>
    )
}