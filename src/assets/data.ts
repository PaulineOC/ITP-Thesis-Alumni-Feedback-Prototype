import { Artwork } from '../utils/apiModels'
import enums from '../utils/enums';

/*
TEMPLATE:
  {
        metId: ``,
        department: ``,
        imgSrc: ``,
        title: ``,
        date: ``,
        creator: ``,
        creatorNationality: ``,
        placeOfOrigin: null,
        metLocation: ``,
        description: ``,
        artworkDetails: {
        },
    },
*/

export const OBJECT_DATA = [
    {
        metId: 10464,
        dbTitle: enums. DB_TITLE.SEASIDE,
        department: enums.DEPARTMENTS.AMERICAN_WING,
        imgSrc: `https://collectionapi.metmuseum.org/api/collection/v1/iiif/10464/32489/main-image`,
        title: `At the Seaside`,
        date: `ca 1982`,
        creator: `William Meritt Chase`,
        creatorNationality: `American`,
        placeOfOrigin: null,
        metLocation: `On View At the Met Fifth Avenue in Gallery 769`,
        description: `From 1891 to 1902, Chase served as the director of the Shinnecock Hills Summer School of Art in the town of Southampton, on Long Island, New York. Chase taught two days each week and spent the rest of his time painting and enjoying the company of his family. In this canvas, women and children take their ease on a beach, probably along Shinnecock Bay. A perfect site for genteel leisure on a perfect day, Chase’s rendering is capped by a broad expanse of sky that fills the upper half of the canvas. The scudding clouds artfully echo the bright white forms of the children’s dresses and the parasol.`,
        artworkDetails: {
            Title: `At the Seaside`,
            Artist: `William Merritt Chase (American, Williamsburg, Indiana 1849–1916 New York)`,
            Date: `ca. 1892`,
            Culture: `American`,
            Medium: `Oil on canvas`,
            Dimensions: `20 × 34 in. (50.8 × 86.4 cm)`,
            "Credit Line": `Bequest of Miss Adelaide Milton de Groot (1876-1967), 1967`,
            "Accession Number": '67.187.123',
        },
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
