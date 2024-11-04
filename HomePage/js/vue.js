Vue.createApp({
    template: 
    `
    <div v-for="info in information">
        <div class="proj-desc">
            <div id = "proj-desc-components">
                <h2>{{info.title}}</h2>
                <div id="proj-desc-components-flex-text"> 
                    <p>{{info.desc}}</p>
                </div>
                <div v-if="info.image" class="betty"><img class= "top-image" :src = info.image :alt=info.title  </div>
                <div id="proj-desc-components-flex-links">
                    
                    <a class="link-text" :href="info.link" target="_blank"><div class="link">Website</div>  </a>
                    <a :href="info.link" target="_blank"><div class="link-icon"><img src = "./HomePage/icons/openpage.png" alt = "link" ></div>  </a>             
                    
                </div>
            </div>
        </div>
    </div>
    
    `,
    data(){
        return {
            information: [
                {title: 'CSE 435 - Software Engineering', link:"https://www.cse.msu.edu/~cse435/", desc: 'Software lifecycle including specification, design, coding, testing, and verification of a software product. Stepwise refinement and traceability. Software maintenance and documentation.'},
                {title: 'Prof. Betty Cheng', link:"http://www.cse.msu.edu/~chengb/", desc: 'Professor Betty Cheng is a professor at Michigan State University in the Computer Science and Engineering Department.', image: "./other/bettycheng.jpg.webp"}
            ]
        };
        
    }
}).mount("#hero-top-right");


Vue.createApp({
    template: 
    `
    <div v-for="link in links">
        <div class="menu-item"><a :href="link.url" target="_blank">{{link.title}}</a></div>
    </div>
    `,

    data(){
        return {
            links: [
                {title: 'Project Description(PDF)', url: "./other/documents/2024-LMS-GM-Agrawal-v2.pdf"},
                {title: 'SRS(PDF)', url:"./other/documents/SRS-1.pdf"},
                {title: 'Bibliography(PDF)', url: "./other/documents/Bibliography.pdf"}
            ]
        };
        
    }
}).mount("#popup-menu");

Vue.createApp({
    template: 
    `
    <div v-for="member in members">
        <div id="member-flex">
            <div>
                <img id="member-picture" :src= member.data[3] :alt = member.name
            </div>

            <div id="member-info">
                <h3>{{ member.name }}</h3>
                <p>{{ member.data[0] }} </p>
                <p>{{ member.data[1] }}</p>
            </div>

            <div id="member-links">

                <div id="proj-desc-components-flex-links">
                    <a class= "iconlink" :href="member.data[2]" target="_blank" title='Linkedin'>
                        <img class="icon" src="./other/LinkedIn 2.svg">
                    </a>           
                </div>
            </div> 
        </div>
    </div>
    `,

    data() {
        return {
            members: [
                {name: 'Baldwin-Williams, Ryon', data: ['Artifacts Manager', 'baldw266', 'https://www.linkedin.com/in/baldwin-williams/','./HomePage/images/ryon_image.JPG'] },
                { name: 'Vandyke, Sawyer', data: ['Project Manager', 'vandy118', 'https://www.linkedin.com/in/sawyer-vandyke-7326532b4/','./HomePage/images/Sawyer_image.png'] },
                { name: 'Grycza, Ben', data: ['Domain Expert', 'gryczabe', 'https://www.linkedin.com/in/ben-grycza-00bb22297/','./HomePage/images/Grycza_Ben_image.png'] },
                { name: 'Williams, Troy', data: ['Security insurance', 'will3645', 'https://www.linkedin.com/in/troy-williams-a90327318/','./HomePage/images/Troy_image.jpg'] },
                { name: 'Bossio, Grant', data: ['Project Facilitator', 'bossiogr', 'https://www.linkedin.com/in/grant-bossio-705598324/','./HomePage/images/grant-image.png'] }
            ]
        };
    }
}).mount("#member-flesh");