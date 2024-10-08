Vue.createApp({
    template: 
    `
    <div> 
        <h1> meetings </h1>
        <div v-for="link in links">
            <div><a href="url">{{ link.date }} </a> </div>
        </div>
    </div>
    `,

    data(){
        return {
            links: [
                {date:"10/?/?", url: "./other/2024-LMS-GM-Agrawal-v2.pdf"},
                {date:"9/?/?", url: "./other/2024-LMS-GM-Agrawal-v2.pdf"}
            ]
        };
        
    }
}).mount("#group-info");