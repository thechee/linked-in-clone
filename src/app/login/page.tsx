'use client';
import { useActionState } from "react"
import { authenticate } from "../lib/actions";

export default function LoginPage() {
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined,
    );

    return (
        <main>
            <form action={formAction}>
                <input className="peer" type="email" />
                <input className="peer" type="password" />
                <button aria-disabled={isPending}>Log In</button>
                {errorMessage && <p>{errorMessage}</p>}
            </form>
        </main>
    )
}