<div class="container">
    <div class="content">
        <form method="POST">
            <label>
                Email
                <input name="email" type="email">
            </label>
            <label>
                Message
                <textarea name="message" type="text"></textarea>
            </label>
            <button>Send</button>
        </form>
    </div>
</div>

<style>
    .container {
        padding: 2px 16px;
    }
    .content {
        width: 100%;
        padding: 10px;
    }
    @media only screen and (min-width: 768px) {
        .content {
            margin: auto;
            width: 50%;
            padding: 10px;
        }
    }

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
    }

    button {
        float: right;
        margin-bottom: 16px;
    }
</style>