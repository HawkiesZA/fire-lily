<script>
import { Recaptcha, recaptcha, observer } from "svelte-recaptcha-v2"

const onCaptchaReady = (event) => {
    console.log("recaptcha init has completed.")
    /*
     │You can enable your form button here.
     */
}

const onCaptchaSuccess = (event) => {
    formReady = true
    console.log("token received: " + event.detail.token)
    /*
     │If using checkbox method, you can attach your
     │form logic here, or dispatch your custom event.
     */
}

const onCaptchaError = (event) => {
    formReady = false
    console.log(`recaptcha init has failed`, event)
    /*
     │Usually due to incorrect siteKey.
     |Make sure you have the correct siteKey..
     */
}
const onCaptchaExpire = (event) => {
    console.log("recaptcha api has expired")
    /*
     │Normally, you wouldn't need to do anything.
     │Recaptcha should reinit itself automatically.
     */
}

const onCaptchaClose = (event) => {
    console.log("recaptcha frame has closed")
    /*
     │This fires when the puzzle frame closes.
     │Usually happens when the user clicks outside
     |the modal frame.
     */
}

export let data
let formReady = false
</script>

<div class="flex flex-col justify-center items-center mb-7">
    <form method="POST">
        <label>
            Email
            <input name="email" type="email">
        </label>
        <label>
            Message
            <textarea name="message" type="text"></textarea>
        </label>
        
        <Recaptcha
            sitekey={data.key}
            badge={"top"}
            size={"checkbox"}
            on:success={onCaptchaSuccess}
            on:error={onCaptchaError}
            on:expired={onCaptchaExpire}
            on:close={onCaptchaClose}
            on:ready={onCaptchaReady} />
        <button disabled={!formReady} class="pt-2 pb-2 pl-5 pr-5 disabled:opacity-50">Send</button>
    </form>
</div>

<style>
    input[type=email], textarea {
        display: inline-block;
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 16px;
        resize: vertical;
        color: var(--text-3);
    }

    button {
        float: right;
        margin-bottom: 16px;
        background-color: var(--surface-4);
    }
</style>