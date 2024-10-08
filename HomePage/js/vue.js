


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
                <div id="proj-desc-components-flex-links">
                    <div class="link">
                        <a class="link-text" :href="info.link" target="_blank">Website</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    `,

    data(){
        return {
            information: [
                {title: 'CSE 435 - Software Engineering', link:"https://www.cse.msu.edu/~cse435/", desc: 'Software lifecycle including specification, design, coding, testing, and verification of a software product. Stepwise refinement and traceability. Software maintenance and documentation.'},
                {title: 'Prof. Betty Cheng', link:"http://www.cse.msu.edu/~chengb/", desc: 'Professor Betty Cheng is a professor at Michigan State University in the Computer Science and Engineering Department. Yada yada yada....'}
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
                {title: 'Project Description(PDF)', url: "./other/2024-LMS-GM-Agrawal-v2.pdf"},
                {title: 'SRS(PDF)', url:"./other/SRS-1.pdf"},
                {title: 'Bibliography(PDF)', url: "./other/Bibliography.pdf"}
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
                <img id="member-picture" :src= member.data[3] alt="Picture of member.name"
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
                { name: 'Vandyke, Sawyer', data: ['Project Manager', 'vandy118', 'https://www.linkedin.com/in/baldwin-williams/','../../other/Ellipse 1.svg'] },
                { name: 'Grycza, Ben', data: ['Domain Expert', 'gryczabe', 'https://www.linkedin.com/in/ben-grycza-00bb22297/','./HomePage/images/Grycza_Ben_image.png'] },
                { name: 'Williams, Troy', data: ['Security insurance', 'will3645', 'https://www.linkedin.com/in/baldwin-williams/','../../other/Ellipse 1.svg'] },
                { name: 'Bossio, Grant', data: ['Project Facilitator', 'bossiogr', 'https://www.linkedin.com/in/baldwin-williams/','../../other/Ellipse 1.svg'] }
            ]
        };
    }
}).mount("#member-flesh");





/* {<template>
    <div 
    ref="container"
    :style="{
        transform:`
        rotateX(${roll * SCALE_CONSTANT}deg) 
        rotateY(${tilt * SCALE_CONSTANT}deg)`
    }"
    > chee </div>
</template> }*/

/* <script setup>
  import { ref } from 'vue'
  import { useParallax } from '@vueuse/core'

  const container = ref(null)
  const { tilt, roll } = useParallax(container)
  const SCALE_CONSTANT = -25;
</script>
*/




// Vue.createApp({
//     setup() {
//         const container = ref(null);
//         const { tilt, roll } = useParallax(container);
//         const SCALE_CONSTANT = -25;

//         return {
//             container,
//             tilt,
//             roll,
//             SCALE_CONSTANT
//         };
//     },
    
//     template: 
//     `
//     <div 
//     ref="container"
//     :style="{
//         transform: \`
//         rotateX(\${roll * SCALE_CONSTANT}deg) 
//         rotateY(\${tilt * SCALE_CONSTANT}deg)\`
//     }"
//     > chee </div>
//     `
// }).mount("#container");
