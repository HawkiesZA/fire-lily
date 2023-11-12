
<script>
</script>

<div class="column">
    <img src="/headshot.png" alt='Gerrit Vermeulen'/>
    <div class="text">Gerrit Roebert Vermeulen</div>
    <div class="text"><a href="mailto:gertznezz@gmail.com">gertznezz@gmail.com</a></div>
    <div class="text">Languages: English, Afrikaans, Python, Kotlin, C, C++, Java, JS/TypeScript (NodeJS)</div>
    <a class="btn" href="https://storage.googleapis.com/hawkiesza-resume/CV.pdf"><span>Download Full Resume</span></a>
</div>

<style>
    .column {
        width: 50%;
        margin: auto;
        text-align: center;
    }
    
    img {
        margin-left: auto;
        margin-right: auto;
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }

    .text {
        font-family: 'Courier New', Courier, monospace;
        padding-bottom: 0.5em;
    }

    a {
        text-decoration: none;
    }
    
    .btn {
        position: relative;

        display: block;
        margin: 30px auto;
        padding: 0;

        overflow: hidden;

        border-width: 0;
        outline: none;
        border-radius: 2px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
        
        background-color: #e7e7e7;
        color: black;
        
        transition: background-color .3s;
    }
    .btn:hover, .btn:focus {
        background-color: #a8a8a8;
    }

    .btn > * {
        position: relative;
    }

    .btn span {
        display: block;
        padding: 12px 24px;
    }

    .btn:before {
        content: "";
        
        position: absolute;
        top: 50%;
        left: 50%;
        
        display: block;
        width: 0;
        padding-top: 0;
            
        border-radius: 100%;
        
        background-color: rgba(236, 240, 241, .3);
        
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .btn:active:before {
        width: 120%;
        padding-top: 120%;
        
        transition: width .2s ease-out, padding-top .2s ease-out;
    }
</style>
