
export default function Login() {

    function signIn(formData) {
        console.log(formData.get('email'));
        console.log(formData.get('password'));
    }

    return (
        <main className="login-main">
            <h1 className="headline">Sign in to your account</h1>
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