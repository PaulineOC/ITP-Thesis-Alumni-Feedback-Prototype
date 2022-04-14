import { Artwork } from '../utils/apiModels'
import enums from '../utils/enums';


/* 
TEMPLATE: 
  {
        department: ``,
        metId: ``,
        metLink: ``,
        imgSrc: ``,
        title: ``,
        date: ``,
        description: ``,
    },
    
*/

const oldData = [
    {
        department: enums.DEPARTMENTS.AFRICAN_ART,
        metId: '309909',
        metLink: 'https://www.metmuseum.org/art/collection/search/309909?&pkgids=656&ft=*&offset=0&rpp=20&amp;pos=1',
        imgSrc: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/309909/672534/main-image',
        title: 'Commemorative Post: Male (Ngya)',
        date: 'late 19th century',
        description: `The Bongo peoples of western South Sudan erect large wooden sculptures around the graves of important members of the community. These tall, polelike monuments take a simplified human form: a male figure that stands with flexed knees and, generally, arms held close to the body. The gentle modeling of the body and the sensitive treatment of the face and head give the piece a simple yet natural aesthetic. The eyes of this figure were originally accented with beads that have since been lost, leaving hollow cavities. Its arms are also missing, but holes indicate that the right arm was at one time reattached.
        It was common practice among the Bongo to honor high-ranking hunters and warriors by erecting these carved wooden effigies on their grave. It is not clear to what extent the effigies were supposed to resemble the deceased, but in at least a few cases, the sculptures do capture personal adornments such as bracelets and scarification patterns. During his lifetime, a Bongo man could gain honor and prestige through successfully hunting large animals or achieving victory in combat. In fact, some Bongo effigies are even notched to indicate the number of successful kills achieved by the deceased. The post was raised by the deceased's relatives usually a year or so after his death in a ceremony accompanied by a large feast. In addition to the central male figure, the grave site may also be decorated with sculptural representations of the deceased's wives, children, and even victims. The wooden monuments and feast confirm the title and rank attained by the deceased during his lifetime, and ensure that he maintains that place of distinction in the afterlife. The higher the deceased's status, the more lavish the celebration. During the festivities, relatives and guests recite his accomplishments and genealogy, so that Loma, the Bongo's Creator God, may evaluate him.
        This work was one of eleven Ngya commemorative posts collected in and around the town of Tonj, in South Sudan, in 1972. According to information gathered at the time of its acquisition, this particular work had served an unusual purpose: set up before 1914 in a market where commercial transactions between Bongo and Nuer populations took place, it was said to help keep trade relations harmonious. The sculpture was given the name of a Nuer ancestor, which has since, unfortunately, been lost. Its distinctive function and location in a sheltered environment explain its smooth and shiny surface, different from the weathered look that characterizes the rest of the corpus of Bongo sculptures. They were each carved from a single tree trunk of mahogany, an exceptionally dense and heavy wood with great durability property.`,
    },
    {
        department: enums.DEPARTMENTS.ANCIENT_NEAR_EASTERN_ART,
        metId: `329090`,
        metLink: `https://www.metmuseum.org/art/collection/search/329090?deptids=3&amp;high=on&amp;ft=*&amp;offset=0&amp;rpp=40&amp;pos=1`,
        imgSrc: `https://collectionapi.metmuseum.org/api/collection/v1/iiif/329090/711777/main-image`,
        title: `Cylinder seal and modern impression: hunting scene`,
        date: `ca. 2250- 2150 B.C.`,
        description: `In ancient Mesopotamia, a cylinder-shaped seal could be rolled on a variety of objects made of clay. When seals were impressed on tablets or tablet cases the seal impressions served to identify the authority responsible for what was written in the documents, much as a signature does today. When seals were impressed on sealings — lumps of clay that were used to secure doors and the lids of storage jars— the seal impressions served to identify their owner and protect against unauthorized opening. Many cylinder seals have survived because they were made of durable materials, particularly stone, but also metal and fired clay. Perforated through the middle like a bead, seals were also believed to have apotropaic, or protective, functions and were worn as jewelry or pinned on garments.
        The modern impression of a seal is shown here so that the entire design can be seen. The scene is composed of two basic groupings that form an overall continuous design unified by the stylized landscape setting. In one group, two tall trees flank a hunter grasping an ibex. Above the man a cuneiform inscription gives the name of the seal owner, Balu-ili, who was a court official, and his profession, cupbearer. In the other group, ibexes stand on mountains, facing each other and flanking three trees. This seal was made during the Akkadian period, when the iconography used by the seal engraver expanded to include a variety of new mythological, thematic, and narrative subjects. Here, the already ancient motif of the hunt is given a new setting in a clearly defined landscape. If there was a relationship between this imagery and the inscribed text, its meaning is no longer understood.
        Sacred and secular ideas, fundamental to the beliefs of ancient Mesopotamian peoples, were visualized in the miniature images carved on the seals. The carver used intaglio, a technique in which the forms were cut into the stone, to create the raised impression. The challenge of the seal carver was to create a design that would maintain its balance and clarity when rolled out only half its length on a small surface or twice its length on a larger surface. On the left and right edges of the impression one can see how the rolled out design begins to repeat. Unlike much of the art of the ancient Near East, which survives only in a fragmentary state, cylinder seals are in the unique position of appearing almost exactly as they would have looked to the ancient people who used them.
        Adapted from: Art of the Ancient Near East: A Resource for Educators (2010)`,
    },
];
export const sampleData = [
    {
        department: enums.DEPARTMENTS.AMERICAN_WING,
        metId: `726728`,
        metLink: `https://www.metmuseum.org/art/collection/search/11207?searchField=All&amp;sortBy=relevance&amp;deptids=1&amp;high=on&amp;ft=*&amp;offset=0&amp;rpp=40&amp;pos=2`,
        imgSrc: `https://collectionapi.metmuseum.org/api/collection/v1/iiif/11207/34534/main-image`,
        title: `The Flower Girl`,
        date: `1846`,
        description: `The Flower Girl" is a highly unusual subject for Ingham, an artist who rarely strayed from portraiture. 
        He may have painted it as a speculative work, or on commission from Jonathan Sturges, who owned the work by the time it appeared on exhibition in the spring of 1847 at the National Academy of Design. Images of street vendors were popular in American and European painting at the time, but more often the subjects were enterprising boys rather than girls. Ingham may well have been familiar with a popular image of the same title by the Spanish painter Esteban Murillo. The setting for Murillo’s picture is virtually identical to Ingham’s and the Spanish flower girl offers her wares with a direct appeal to her viewer, as does Ingham’s American girl. Under her left arm, Ingham's girl carries a magnificent bouquet of flowers that he must have painted from life, but were beyond compare not only in contemporary still life painting but also on the streets of New York. In her right hand, she offers a potted fuchsia, the gesture emblematic of the goddess Flora. The plant itself is symbolic of frustrated love.`
    },
    {
        department: enums.DEPARTMENTS.AMERICAN_WING,
        metId: `12127`,
        metLink: `https://www.metmuseum.org/art/collection/search/12127`,
        imgSrc: `https://collectionapi.metmuseum.org/api/collection/v1/iiif/12127/33591/restricted`,
        title: `Madame X`,
        date: `1883-1884`,
        description: `
        Madame Pierre Gautreau (the Louisiana-born Virginie Amélie Avegno; 1859–1915) was known in Paris for her artful appearance. 
        Sargent hoped to enhance his reputation by painting and exhibiting her portrait. 
        Working without a commission but with his sitter’s complicity, he emphasized her daring personal style, 
        showing the right strap of her gown slipping from her shoulder. At the Salon of 1884, the portrait received more ridicule than praise. 
        Sargent repainted the shoulder strap and kept the work for over thirty years. 
        When, eventually, he sold it to the Metropolitan, he commented, “I suppose it is the best thing I have done,” 
        but asked that the Museum disguise the sitter’s name.`,
    },
    {
        department: enums.DEPARTMENTS.ASIAN_ART,
        metId: `37145`,
        metLink: `https://www.metmuseum.org/art/collection/search/37145?searchField=All&amp;sortBy=Relevance&amp;deptids=6&amp;high=on&amp;ao=on&amp;ft=*&amp;offset=0&amp;rpp=40&amp;pos=10`,
        imgSrc: `https://collectionapi.metmuseum.org/api/collection/v1/iiif/37145/140252/main-image`,
        title: `Night Rain at the Double-Shelf Stand, from the series Eight Parlor Views (Zashiki hakkei)`,
        date: `ca. 1766`,
        description: `
        This beguiling scene of a girl lulled by the sound of a softly boiling tea cauldron, set on a portable hearth of the type used during the summer, is one of Harunobu’s Eight Parlor Views (Zashiki hakkei). 
        It playfully alludes to “Night Rain,” one of the Eight Views of the Xiao and Xiang Rivers in China, 
        a venerable theme in both Chinese and Japanese painting. Here the summer mood intrinsic to that landscape is transposed to the interior of an Edo (Tokyo) house of pleasure. Harunobu’s work is distinctive for its subtle tonality, achieved by mixing pigments rather than by superimposing two printed colors.`,
    },
];

//For later: add more details
