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
        <button class="pt-2 pb-2 pl-5 pr-5">Send</button>
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