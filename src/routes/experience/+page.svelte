<script>
    import Header from './header.svelte'
    import Experience from './experience.svelte';
    import { employmentHistory } from './employmentHistory.js'
    import { educationHistory } from './educationHistory.js'
</script>

    <div class="container">
        <Header />
        
        <div class="content">
            <h2>Employment History</h2>
            {#each employmentHistory as item}
                <Experience
                    title = {item.title}
                    monthYearStart = {item.start}
                    monthYearEnd = {item.end}
                    description = {item.description}
                    skills = {item.skills}
                    location = {item.location}
                />
            {/each}
        
        
            <h2>Education</h2>
            {#each educationHistory as item}
                <Experience
                    title = {item.title}
                    monthYearStart = {item.start}
                    monthYearEnd = {item.end}
                    description = {item.description}
                    location = {item.location}
                />
            {/each}
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

    h2 {
        text-align: center;
        font-family: Arial, Helvetica, sans-serif
    }

    
</style>