# Preface

## Introducing Kio

Our team aims to tackle the issues of social inclusion and social stigma towards PwDs. As noted by NCSS’s report on PwDs:

> In holistically improving the areas outlined in the WHOQOL-BREF, addressing social inclusion when designing initiatives can achieve the greatest effect. 
The aspects to focus on include eliminating barriers to understanding, communicating and getting along with others, and increasing social participation.

As such, our team designed Kio.

**Kio** (乔, kío), meaning “Bridge” in Hokkien, is a solution that *bridges* the gap between people: Kio aims to fosters meaningful interactions between People-with-Disabilities (PwDs) and People-without-Disabilities (PwOD) by participating in activities together. 

PwDs (**Explorers**) are matched with PwODs (**Befrienders**) in meaningful events, which include:
- Community events: Activities that give back to the community, such as volunteering at soup kitchens, beach cleanups, and community gardening.
- Recreational events: Activities that Explorers are interested in, which are indicated in their profile.

As a platform that encourages greater interaction between PwDs and PwODs, Kio deploys a three-pronged approach in alleviating the challenges faced by PwDs:
1. **Empower PwDs to integrate into their community by lowering the barriers for community contribution and inclusion:** Community and Recreational events are opportunities for PwDs to contribute back to the community and form strong interpersonal relationships with their communities, complementing the goal by the Government to foster a strong “kampung spirit” in all neighbourhoods across the island. 


2. **Improve public awareness and perception towards PwDs:** With opportunities to interact with PwDs, we break the stigma that PwDs are “different” from them. Ultimately, Kio aims to normalize interactions between PwDs and PwODs.


3. **Enhance existing initiatives for PwDs:** Kio builds on existing initiatives for PwDs by private and government organizations in Singapore. Community and Recreational events can easily include activities and initiatives by these organizations. For example, MYMCA’s Big Sweep home improvement initiative had previously experienced a lack of volunteer manpower, despite the similarity to its sister initiative Habitat for Humanity. By partnering with these VWOs, we hope to add value to their initiatives and help them reach the wider community.

Ultimately, Kio empowers PwDs to participate in community and recreational events together with their neighbors, providing opportunities to give back to their community while fostering close interpersonal relationships with others. Kio aims to achieve social inclusion by normalizing interactions between PwDs and Singaporeans, to break down barriers, and promote PwDs to have active and meaningful participation in society.

## Kio’s Approach - What to Read in This Document
Kio is not just a software application. Kio aims to be a holistic solution that leverages on and integrates existing initiatives for PwDs into a cohesive interface for Singaporeans to learn more, interact with, and integrate PwDs into their community. 

There are two parts to Kio:
- **Mobile Application:** An accessibility-first mobile application has been developed as a prototype to provide Befriender-Explorer matching services. A demo of our application can be found [here](kio-hack4good.web.app).
- **Islandwide Institutional Implementation and Integration:** Beyond the application, Kio aims to integrate the different initiatives across different organizations. 

We understand this README is long. As such, our team has outlined a few sections that may be of interest to you in order: 

- **Mobile Application:** Features for the mobile application, and how it’s designed.
- **Product Lifecycle:** A comprehensive overview of how Kio is planned to be implemented island-wide.
- **User Flow:** A visual representation of how a Befriender or Explorer might use the mobile application.
Motivation and Research: Useful to understand why we came up with Kio. Of note is how we analyzed existing initiatives and their limitations.
- **Strengths and Limitations:** Certain strengths and limitations we perceive Kio to have.
- **Motivation and Research**: Our research into the challenges PwDs face, and how we developed Kio to empower PwDs to overcome them.

## Team Members
Kio is built by a team of four students from the National University of Singapore: 
- Seah Shau Chung Nicholas (Year 2 Computer Science) 
- Mai Ting Kai (Year 2 Computer Science) 
- Toh Hui Lin Jamie (Year 1 Computer Science) 
- Koh Chan Hong (Year 1 Computer Science)

<br>

# Motivation and Research
## Challenges Faced By PwDs
Research conducted by the National Council of Social Services 
utilized World Health Organization Quality of Life (WHOQOL) survey instruments (e.g. questionnaires, documents) to understand the challenges faced by PwDs, where surveys on the public perception of PwDs were also conducted. 

In summary, they found that:

- **PwDs experience generally low Quality-of-Life standards:** Across the Quality of Life domains, as defined in (Social Relationships, Level of Independence, Personal Beliefs, Environment, Psychological, Physical), PwDs scored lower than the general population across all domains, especially in the first three domains.

- **PwDs experience challenges with Autonomy, Discrimination, and Social Inclusion:** PwDs are found to experience a lack of autonomy and control over their life choices. They also feel excluded from contributing to society.

- **PwDs experience stigma from general public attitudes:** PwDs felt like they were treated differently because of their disability. The general public holds stereotypes, judgements, and misconceptions towards the PwDs. This results in significant challenges for PwDs seeking employment. 

These findings are echoed by research from the Company of Good, an independent organization that brings about sustainability and impact to one's corporate social responsibility efforts. It highlights the possible reasons for these pain points, which contribute to the persistent discrimination and exclusion of PwDs from mainstream society. 

Further challenges highlighted by the Company of Good include: 
- **Lack of Awareness:** The misconceptions towards PwDs can be attributed to the fact that disabilities are vast and varied. There is a need for more efforts to raise awareness and combat the lack of information and understanding of various types of disability.

- **Integration is NOT inclusion:** PwDs tend to be included into mainstream environments without taking into account their needs or choices. In the workplace, PwDs are hired not based on considerations of their capabilities but to fulfill some form of corporate social responsibility. These existing solutions are unproductive as they target the symptoms of the problem rather than the root cause. 

Most alarmingly, in a 2016 survey, 62% of PWDs reported that “they do not feel included, accepted, given opportunities to contribute or reach their potential by society.”


## Analysing Existing Initiatives
Two types of barriers actively being addressed are: the physical ‘hardware’ barriers and the ‘software’ in terms of negative attitudes towards disability. 

There are currently very few inclusive spaces that create opportunities for people with and without disabilities to engage with one another. Current inclusive spaces include Singapore’s first inclusive kindergarten, Kindle Garden by AWWA, iFit inclusive gym and the inclusive playgrounds in Bishan-Ang Mo Kio Park and Canberra Park. Most solutions currently do not target the adult population.

## Comparing Pain Points to Initiatives
There have been significant efforts put in by voluntary welfare organisations and the government alike to address the issues faced by the PwDs. Examples include the Assistive Technology Fund which subsidises the purchase of assistive technology devices that enable independent living, a wide range of employment support schemes for PwDs, as well as MSF’s recent plan to pilot the development of Enabling Business Hubs (EBH), which seek to provide employment and on-job-training to PwDs. 

While a lot of attention has been drawn towards solving the pain points of PwDs, some of these solutions have shortcomings that weaken their effectiveness.

## Weaknesses in Existing Initiatives

Most attempts at improving the well-being of PwDs end up being counterproductive. For example, some charities raising funds for their operations promote PwDs as objects of pity. It can be argued that this attitude towards PwDs only serves to hinder them, as such negative perceptions of PwDs may become entrenched in the long run.

Our application aims to get the wider community to respond with empathy (rather than sympathy) towards PwDs. By gaining a thorough understanding of the needs of PwDs, it can be argued that the wider community is better equipped to help assimilate PwDs into their social and work circles. 

While there have been solutions that succeeded in providing a conducive work environment for PwDs to work with one another, these solutions stop short at addressing the symptoms of the issue. 

For example, Professor Brawn Cafe is a good example of empowering PwDs (persons with intellectual disabilities in particular) by training and providing them with a productive place to learn and work. However, it can be argued that the work environment remains largely segregated, which is undesirable as interactions between PwDs and PwoDs stay limited. 

More opportunities should be made available and presented for PwDs to work and interact with PwoDs, which is one of the key goals our application hopes to achieve. 

# Our Solution

## Targeted Stakeholders
Kio helps break down barriers for people with disabilities by using language that is inclusive and respectful. Instead of referring to them as "Persons with Disabilities" or "Persons without Disabilities," Kio uses the terms "Explorers" and "Befrienders" respectively, to empower and include them in the community.
### Explorers (People-with-Disabilities)

We aim to empower Explorers in Singapore to build confidence in their own abilities by contributing to community service activities (e.g. maintaining a community garden, participating in home involvement initiatives). 

By working closely with Befrienders, Explorers can also address any misconceptions and preconceived notions Befrienders have about them, and help to bridge the gap in awareness between the two groups. 

In addition, being able to work towards a common goal will go a long way in helping the group of Explorers and Befrienders get to know each other better and develop bonds that might culminate in a long-term friendship, helping Explorers assimilate more easily into the wider community. 

### Befrienders (People-without-Disabilities)

We aim to educate Befrienders on the various types of challenges that Befrienders might face. More importantly, Kio aims to substantially increase their interactions with Befrienders to overcome stigma and misconceptions. We want Singaporeans to understand the challenges Explorers face and develop greater empathy and understanding. 

## Mobile Application

### Link to Kio's Demo
A link to a product demo can be found [here](kio-hack4good.web.app).

### Features for the Mobile Application
There are a few iterations of the Mobile Application. We have included up to v3.0 in this report. As our team gains more experience developing Kio and communicating with different stakeholders, we will continue enhancing our application to suit the needs of our users. 
### Mobile Application Milestones:

**MVP v1.0**

- Authentication for Explorers, and Caretakers
- MapView
- Befriender-Explorer-Caretaker Matching System
- In-App Education Resources

**MVP v2.0**

- Basic Gamification Features
- Simple achievements
- XP System
- Achievement and Reward System
- Basic Accessibility Features
- Screen magnifier for low vision (Scalability)
- Simplified UI options
- Adaptive icons for visually impaired users
- Event Gallery 

**MVP v3.0**

- Incentive Reward System
- Enhanced In-App Education Resources
- Quizzes for different types of disabilities
- Advanced Accessibility Features
- Multi-Language Support
- Screen Reader for Text-to-Speech
- High Contrast Mode

## Feature List
- Befriender-Explorer-Caretaker Matching System
- In-App Education Resources
- Gamification
- Incentive Reward System

## User Flow
### Product Lifecycle

Milestone v1.0 (MVP) will be achieved as a proof-of-concept. Major features of Kio, including the matching system, education resources, and gamification, will be included in this version. Afterwards, we aim to conduct user testing with willing Befrienders and/or Explorers for bug fixing and improving on features. In the longer term, we hope to consult PwD voluntary welfare organisations to better understand the requirements of Explorers and Befrienders.

Although our team is passionate about empowering PwDs, we understand the limitations of our knowledge. We plan to consult with industry experts from different institutions (government and private), and obtain a fuller understanding of the PwD landscape in Singapore.

Notably, we plan on collaborating closely with EnableSG and leverage on their expertise to develop Kio into a more holistic solution.

The Mobile Application will likely receive further changes in this time, building on the feedback received.

### Building Partnerships

As Kio plans on partnering with existing organizations and enhancing their existing initiatives, further consultations and studies will be conducted with them to learn how Kio may best complement them. 

### Pilot Test in Neighbourhood/Community Center
After sufficiently polishing the Mobile Application and consulting with industry experts, we hope to pilot test Kio in a Community Center, which is most likely to reflect the intended use-cases of Kio. For example, we may have small groups of willing Befrienders and Explorers to try out the matching system and participate in activities together. From here, we would conduct surveys to determine the effectiveness of Kio. We hope to build on the feedback received to continue improving Kio.

For example, Yishun is a Dementia-Friendly Neighbourhood (DFN) where many pilot activities to support dementia patients are run. With many neighbourhood dementia-friendly features being developed in Yishun initially, we hope to emulate this model with Kio by trial-testing features in a location that may hold greater impact.

Further tests may be conducted until Kio is proven to be safe for Befrienders/Explorers, and that the target goal of improving inclusivity for Explorers is achieved.

## Growth

### Expand Implementation of Kio into More Community Centres

If the pilot test proves successful, Kio is planned to be introduced into more places-of-interest around Singapore. For example, Kio could be expanded into more community centres for further testing, to check if Kio remains effective and safe when used on a large scale. It is expected that the features Kio provides will continue to change as we continue receiving feedback.

### Enhancements to Mobile Application
Milestone v2.0 will be achieved, which includes more accessibility-friendly features. The features described above are inexhaustive, and will change depending on the feedback obtained in v1.0.
### Marketing Campaign
Marketing campaigns to increase the awareness of Kio will be established after a certain level of stability and reliability into Kio has been achieved. 

### Partnering with Key Government, Private, and Community Organizations
We hope to partner with local government and community organisations to increase access and adoption of Kio. For example, suitable activities held by these organisations can be marked as Community Events that Befrienders and Explorers can participate in. Notably, we hope to partner with disability organisations and advocacy groups to increase reach and impact.

### Enhancing Incentive System
Drawing inspiration from the National Steps Challenge, we hope to enhance the rewards that users of Kio will experience. This is to not only improve user retention of Kio, it also serves to encourage greater uptake of Kio by the general public.
## Maturity 
### Increase and Strengthen Partnerships with Organizations around Singapore
With Kio proven successful by partnering with some organisations, we hope to aggressively push Kio to include more Community Events with Partner Organisations in and around Singapore. We believe that these organisations can provide greater support to engage the Befrienders and Explorers, and further enhance their interactions with each other.
## Strengths and Limitations
### Strengths
Kio enhances existing initiatives: Kio does not attempt to reinvent the wheel. Rather, Kio exists to further increase the effectiveness of existing initiatives, by providing a platform to increase awareness of PwD initiatives, as well as to interact with PwDs and practice compassion and empathy.
### Limitations
Inexperience of team: We understand that our collective experience with PwDs are limited. As such, we hope to leverage on the expertise that SGEnable may offer to help develop Kio.

## References

- [NCSS Understanding the QOL of Adults with Disabilities](https://www.ncss.gov.sg/press-room/publications/UnderstandingtheQualityofLifeofAdultswithDisabilities)
- [CityOfGood's Report of Issues faced by People with Disabilities in Singapore](https://cityofgood.sg/resources/report-on-issues-faced-by-people-with-disabilities-in-singapore/)
- [Today's When Persons Disabilities Singapore Are Left Out Bodies Remaining](https://www.todayonline.com/commentary/when-persons-disabilities-singapore-are-left-out-bodies-representing-them)
- [SmartBFA Mapping Accessibility](https://better.sg/blog/2021/05/24/interview-mercurics-team-smartbfa-mapping-accessibility/)
- [SGEnable's Disability in Singapore](https://www.sgenable.sg/about-us/our-impact/disability-in-singapore)
