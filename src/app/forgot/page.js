export default function Forgot(){

    return(

        <form>
            <h1>Reset password</h1>
            <p>Enter your email address to receive an email with instructions how to reset your account password.</p>
            <div>
                <label for="email">Email address</label><br/>
                <input type="email"/>
            </div>
            <button>Restore</button>
        </form>
    )
}