<script>
    export let title
    export let monthYearStart
    export let monthYearEnd
    export let description
    export let skills
    export let location
</script>

<div class="card">
    <div class="titleRow">
        <span class="title">{title}</span>
        <span>{location ? `${location}` : ''}</span>
        <div>
            <span>{monthYearStart}</span>
            {#if monthYearEnd}
                <span>&nbsp-&nbsp</span>
            {/if}
            <span>{monthYearEnd}</span>
        </div>
    </div>
    <p>{description}</p>
    {#if skills}
        {#each skills as skill}
            <span class="skill">{skill}</span>
        {/each}
    {/if}
</div>

<style>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        padding: 0.5em;
        margin-bottom: 1em;
    }
    .card:hover, .card:focus {
        background-color: var(--surface-3)
    }
    .titleRow {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        margin: auto;
        padding: 0.2em;
    }
    span {
        font-family: Arial, Helvetica, sans-serif;
    }
    span.title {
        font-weight: bold;
    }
    span.skill {
        padding: 0.5em;
        font-size: 10px;
    }
    p {
        margin: auto;
        font-family: 'Courier New', Courier, monospace;
        width: 80%;
        padding: 1em;
    }
</style>