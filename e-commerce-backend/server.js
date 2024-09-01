import url from './config.js'
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path'; 
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
const PORT = 5000;

mongoose
  .connect(url)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
app.use(express.json());
app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'assets')));


const bookSchema = new mongoose.Schema({
  id: String,
  title: String,
  author: String,
  price: Number,
  description: String,
  image: String,
  category: String,
  releasedDate: String,
  recommendation: String,
});

const Book = mongoose.model("Book", bookSchema);

const seedDatabase = async () => {
  try {
    await Book.deleteMany();

    const books = [ 
      {
        id: "1",
        title: "Funny Story",
        author: "Emily Henry",
        price: 299,
        description: "Daphne's life takes a turn when her fiancé Peter...",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1691777485i/194802722.jpg",
        category: "Romance Fiction",
        releasedDate: "23-04-2024",
        recommendation: "Best this year",
      },
      {
        id: "2",
        title: "The Devil At His Elbow",
        author: "Valerie Bauerlein",
        price: 18.99,
        description: "A thrilling sci-fi adventure",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1712842498i/210454076.jpg",
        category: "Fiction Thriller",
        releasedDate: "20-08-2024",
        recommendation: "none",
      },
      {
        id: "3",
        title: "In the Dream House",
        author: "Carmen Maria Machado",
        price: 22.5,
        description: "An epic fantasy saga",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1547869259i/43317482.jpg",
        category: "Non-fiction Queer",
        releasedDate: "05-11-2019",
        recommendation: "All time Top",
      },
      {
        id: "4",
        title: "On Earth we are briefly Gorgeous",
        author: "Ocean Vuong",
        price: 22.5,
        description: "An epic fantasy saga",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1615580168i/41880609.jpg",
        category: "Fiction",
        releasedDate: "04-06-2019",
        recommendation: "All time Top",
      },
      {
        id: "5",
        title: "Glass Houses",
        author: "Madeline Ashby",
        price: 22.5,
        description: "An epic fantasy saga",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1699554056i/195790684.jpg",
        category: "Fiction",
        releasedDate: "13-08-2024",
        recommendation: "none",
      },
      {
        id: "6",
        title: "Happy Place",
        author: "Emily Henry",
        price: 327,
        description:
          "Harriet and Wyn, once the perfect couple, secretly broke up six months ago but haven't told their close-knit group of friends. To avoid ruining their annual vacation, they decide to pretend they're still together during a week-long stay at a beloved Maine cottage, which their friend group has visited for a decade. With the cottage up for sale and this being their last time there, they navigate the challenges of keeping up appearances, despite lingering feelings and the tension between them. In this poignant and humorous novel by Emily Henry, the couple grapples with pretending to be in love while surrounded by the friends who know them best.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660145160i/61718053.jpg",
        category: "Fiction Romance",
        releasedDate: "25-04-2023",
        recommendation: "Popular in 2023",
      },
      {
        id: "7",
        title: "The Hating Game",
        author: "Sally Thorne",
        price: 320,
        description:
          "Lucy Hutton and Joshua Templeman, executive assistants at a publishing company, are arch-enemies who engage in daily passive-aggressive battles. Their rivalry intensifies when they compete for the same promotion, putting their careers on the line. Despite their mutual hatred, the tension between them starts to blur the lines, and Lucy begins to wonder if their animosity might actually be hiding something else—possibly even attraction. As their competition heats up, so do their feelings, leaving Lucy to question whether their rivalry is just another game or something more.An epic fantasy saga",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1481566824i/27213238.jpg",
        category: "Fiction Romance",
        releasedDate: "09-08-2016",
        recommendation: "none",
      },
      {
        id: "8",
        title: "Red White & Royal Blue",
        author: "Casey McQuiston  ",
        price: 22.5,
        description:
          "Alex Claremont-Diaz, the First Son of the United States, is part of the 'White House Trio' alongside his sister and the Vice President's granddaughter—a key part of his mother’s re-election campaign. However, when a confrontation with his rival, Prince Henry of Britain, goes public, it threatens to strain US-British relations. To manage the fallout, Alex and Henry are forced to fake a friendship, but their relationship soon turns into a secret romance. As President Claremont's re-election campaign intensifies, Alex must navigate the complexities of his feelings for Henry, questioning what he's willing to sacrifice for love and how it will shape his legacy.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566742512i/41150487.jpg",
        category: "Fiction Romance Queer",
        releasedDate: "14-05-2019",
        recommendation: "All time Top",
      },
      {
        id: "9",
        title: "The Kiss Quotient",
        author: "Helen Hoang",
        price: 235,
        description:
          "Stella Lane, a brilliant mathematician who believes in the power of algorithms, excels in her career but struggles with relationships, partly due to her Asperger's. Deciding she needs practice, she hires escort Michael Phan to teach her the art of dating and intimacy. Though their arrangement starts as a business transaction, Stella soon finds herself drawn to Michael in ways she hadn't predicted. As their lessons progress, Stella begins to realize that love, unlike math, can't always be calculated, and the connection they develop might just be the most logical thing of all.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1688188444i/36199084.jpg",
        category: "Fiction Romance",
        releasedDate: "05-06-2018",
        recommendation: "none",
      },
      {
        id: "10",
        title: "The Midnight Library",
        author: "Matt Haig",
        price: 250,
        description:
          "Nora Seed finds herself in the Midnight Library, a mystical place between life and death that offers her a chance to redo her life. Filled with regret and despair, Nora is given the opportunity to explore the different paths her life could have taken through the books in the library. With the guidance of an old friend, she revisits her choices, hoping to find the perfect life. However, as she navigates these alternate realities, she discovers that each choice comes with its own consequences, and the library—and her very existence—are at risk. Nora must ultimately decide what truly makes life worth living before it's too late.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg",
        category: "Fiction Fantasy",
        releasedDate: "13-08-2020",
        recommendation: "none",
      },
      {
        id: "11",
        title: "The Book of Bill",
        author: "Alex Hirsch",
        price: 225,
        description:
          "'The Book of Bill' brings back the notorious demon Bill Cipher from Gravity Falls as he finally gets to tell his side of the story. Written by Bill himself, this chaotic and cursed book dives into his mysterious origins, his impact on human history, and his ultimate plans for world domination. Filled with mind-bending riddles, uncrackable ciphers, and dark secrets about the Pines family, Bill's narrative offers a twisted, humorous, and dangerous perspective on the Gravity Falls universe. Packed with bizarre illustrations and cursed content, this book is intended for older readers who dare to delve into the mind of Bill Cipher. But beware—once you engage with Bill, escaping his grasp is nearly impossible.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1702662879i/203315037.jpg",
        category: "Fiction Fantasy",
        releasedDate: "23-07-2024",
        recommendation: "none",
      },
      {
        id: "12",
        title: "The Priory of the Orange Tree",
        author: "Samantha Shannon",
        price: 599,
        description:
          "In a world teetering on the brink of chaos, the ancient House of Berethnet has ruled the queendom of Inys for a millennium. Queen Sabran the Ninth, still without an heir, faces increasing pressure to conceive a daughter to secure the realm's future, as assassins draw ever closer. Ead Duryan, an outsider in the court and secretly loyal to a clandestine group of mages, has risen to the role of lady-in-waiting, using forbidden magic to protect Sabran from the shadows. Across the sea, Tané, a young woman trained from childhood to become a dragonrider, faces a life-altering decision that could unravel everything she has worked for. As ancient forces awaken and the East and West remain bitterly divided, the world stands on the edge of a conflict that could change everything.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1700221964i/40275288.jpg",
        category: "Fiction Fantasy Romance Queer",
        releasedDate: "26-02-2019",
        recommendation: "All time Top",
      },
      {
        id: "13",
        title: "Business Casual",
        author: "B.K. Borison",
        price: 300,
        description:
          "Nova Porter, focused on launching her tattoo studio in Inglewild, finds herself inexplicably drawn to the prim and proper investment banker, Charlie Milford. To clear her head and focus on her business, she proposes a no-strings-attached night together, aiming to quash their mutual attraction. However, their steamy encounter disrupts their plans, leaving them both reevaluating their feelings. With Charlie temporarily managing Lovelight Farms in town, Nova struggles to avoid him. Meanwhile, Charlie is determined to show Nova that he's more than just a fleeting distraction and that he might be worth investing in.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1696218822i/199252912.jpg",
        category: "Fiction Romance",
        releasedDate: "27-06-2024",
        recommendation: "none",
      },
      {
        id: "14",
        title: "The Wedding People",
        author: "Alison Espach",
        price: 350,
        description: "An epic fantasy saga",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1721918653i/198902277.jpg",
        category: "Fiction Romance",
        releasedDate: "30-07-2024",
        recommendation: "none",
      },
      {
        id: "15",
        title: "Atomic Habits",
        author: "James Clear",
        price: 410,
        description:
          "Atomic Habits by James Clear presents a practical framework for achieving lasting change by focusing on small, incremental habits. Clear, a leading expert on habit formation, explains that success is not about lofty goals but effective systems. He argues that bad habits persist not because of personal failure but due to flawed systems. By leveraging insights from biology, psychology, and neuroscience, Clear provides strategies for forming good habits, breaking bad ones, and creating environments conducive to success. The book includes actionable advice on overcoming motivation issues, designing supportive environments, and recovering from setbacks. Through real-life stories from top performers, Atomic Habits aims to reshape your approach to progress and offer tools for transforming habits and achieving goals.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg",
        category: "Non-fiction",
        releasedDate: "16-10-2018",
        recommendation: "All time Top",
      },
      {
        id: "16",
        title: "Becoming",
        author: "Michelle Obama",
        price: 410,
        description:
          "In her memoir Becoming, Michelle Obama shares a deeply personal and reflective account of her life, from her upbringing on the South Side of Chicago to her role as the First Lady of the United States. The book details her journey through various stages of her life, including her career as an executive, her role as a mother, and her transformative time in the White House. With honesty and humor, Obama recounts her triumphs and challenges, providing insight into her advocacy for women and girls, her efforts to promote healthier living, and her experiences under intense media scrutiny. Becoming is a powerful and inspirational narrative about defying expectations and finding one's voice.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1528206996i/38746485.jpg",
        category: "Non-fiction",
        releasedDate: "06-05-2020",
        recommendation: "none",
      },
      {
        id: "17",
        title: "Bright Young Women",
        author: "Jessica Knoll",
        price: 410,
        description:
          "Bright Young Women is a compelling novel inspired by real events surrounding America's first celebrity serial killer. Set in January 1978, the story begins with the brutal attack on a sorority at Florida State University, where Pamela Schumacher, the sorority president, narrowly escapes a horrific crime that leaves several of her sisters dead or injured. Meanwhile, across the country in Seattle, Tina Cannon, who has found peace after years of struggle, becomes deeply involved when her new friend Ruth Wachowsky goes missing at a public park. As Tina investigates Ruth’s disappearance, she discovers the connection to the serial killer known as the All-American Sex Killer, whose crimes have captivated the nation. The novel intertwines the stories of Pamela and Tina, highlighting their shared quest for justice and reexamining the sensationalized narrative of the killer, focusing instead on the extraordinary lives of the victims.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1676221840i/101124639.jpg",
        category: "Thriller Fiction",
        releasedDate: "19-09-2023",
        recommendation: "Popular in 2023",
      },
      {
        id: "18",
        title: "Camino Ghosts",
        author: "John Grisham",
        price: 410,
        description:
          "In this new thriller on Camino Island, popular bookseller Bruce Cable tells Mercer Mann an irresistible tale that might be her next novel. A giant resort developer is using its political muscle and deep pockets to claim ownership of a deserted island between Florida and Georgia. Only the last living inhabitant of the island, Lovely Jackson, stands in its way. What the developer doesn’t know is that the island has a remarkable history, and locals believe it is cursed…and the past is never the past…",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1697132099i/199550833.jpg",
        category: "Thriller Fiction",
        releasedDate: "28-05-2024",
        recommendation: "Best this year",
      },
      {
        id: "19",
        title: "A Good Girl's Guide to Murder",
        author: "Holly Jackson",
        price: 499,
        description:
          " A Good Girl's Guide to Murder by Holly Jackson, high school senior Pip Fitz-Amobi is troubled by the unresolved murder case that has haunted her town for five years. Andie Bell was supposedly killed by her boyfriend, Sal Singh, who then took his own life. Despite the town's acceptance of this narrative, Pip, who knew Sal as a child, is unconvinced of his guilt. For her senior project, Pip decides to investigate the case, initially to question the original conclusion but soon uncovering a web of dark secrets that could exonerate Sal. As Pip digs deeper, she finds herself in increasing danger as someone in Fairview is determined to keep the truth buried.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1545494980i/40916679.jpg",
        category: "Fiction Thriller",
        releasedDate: "02-05-2019",
        recommendation: "All time Top",
      },
      {
        id: "20",
        title: "Quiet",
        author: "Susan Cain",
        price: 320,
        description:
          "In Quiet: The Power of Introverts in a World That Can't Stop Talking, Susan Cain explores the undervalued strength of introverts in a society that favors extroversion. She examines how the 'Extrovert Ideal' has shaped our culture and how introverts, like Rosa Parks and Chopin, have made significant contributions despite societal bias. Cain presents compelling stories of successful introverts and argues that their qualities, such as creativity and deep thinking, are essential and often overlooked. The book challenges readers to reconsider the value of introverts and their role in our world.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328562861i/8520610.jpg",
        category: "Non-fiction",
        releasedDate: "24-01-2012",
        recommendation: "none",
      },
      {
        id: "21",
        title: "The Quiet Damage",
        author: "Jesselyn Cook",
        price: 399,
        description:
          "The Quiet Damage by Jesselyn Cook delves into the profound impact of conspiracy theories, particularly those propagated by QAnon, on five American families. Cook, a seasoned journalist, explores how these false beliefs cause rifts and turmoil within families, from long-term relationships to parent-child bonds. The book examines the psychological allure of conspiracy theories and their disruptive effects on personal lives, portraying both the suffering of those caught in these webs of deceit and the potential for reconciliation. With in-depth stories and research, Cook provides insight into the ways these theories erode trust and connection, and offers pathways for healing and understanding.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1704390480i/194803883.jpg",
        category: "Non-fiction",
        releasedDate: "23-06-2024",
        recommendation: "Best this year",
      },
      {
        id: "22",
        title: "The Rose Arbor",
        author: "Rhys Bowen",
        price: 199,
        description:
          "In this gripping novel of suspense, Liz Houghton, a struggling obituary writer in 1968 London, seizes the opportunity to break a high-profile story about a missing girl to advance her career. Her friend Marisa, a police officer on the case, leads Liz to Dorset, where a chilling connection to a past mystery emerges. Decades earlier, during World War II, three girls vanished while being evacuated from London. One was found dead, while the other two disappeared without a trace. Liz's investigation takes her to the deserted village of Tydeham, requisitioned and abandoned during the war. As she uncovers disturbing links between the current disappearance and the wartime tragedy, she is haunted by a sense of eerie familiarity with the village. Her pursuit of answers reveals dark secrets buried in the ruins of Tydeham, entwining past and present in a suspenseful narrative.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1715959569i/201156640.jpg",
        category: "Thriller Fiction",
        releasedDate: "06-08-2024",
        recommendation: "none",
      },
      {
        id: "23",
        title: "Sugar on the Bones",
        author: "Joe R. Lansdale",
        price: 320,
        description:
          "PI Duo Hap & Leonard investigate the untimely death of a woman whose family stood much to gain from her passing. It's a holy mess of a case for the 'perpetual bad boy' (New York Times) sleuths in this beloved series. Minnie Polson is dead. Burned to a crisp in a fire so big and bad it had to be deliberate. The only thing worse is that Hap and Leonard could have prevented it. Maybe. Minnie had a feeling she was being targeted, shaken down by some shadowy force. However, when she’d solicited Hap & Leonard, all it took was one off color joke to turn her sour and she’d called them off the investigation. Wracked with a guilty conscience, the two PIs—along with Hap’s fleet-footed wife, Brett—tuck in to the case. As they look closer, they dredge up troublesome for one, Minnie’s daughter, Alice, has recently vanished. She’d been hard up after her pet grooming business went under and was in line to collect a whopping insurance sum should anything happen to her mother. The same was due to Minnie’s estranged husband, Al, whose kryptonite (beautiful, money-grubbing women) had left him with only a run-down mobile home. But did Minnie’s foolish, cash-strapped family really have it in them to commit a crime this grisly? Or is there a larger, far more sinister scheme at work? Irreverent, wise-cracking, and full of atmosphere and bite, Sugar on the Bones is not to be missed.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1716325427i/201627003.jpg",
        category: "Thriller Fiction",
        releasedDate: "16-07-2024",
        recommendation: "none",
      },
      {
        id: "24",
        title: "Tell Me Everything",
        author: "Minka Kelly",
        price: 299,
        description:
          "In this candid memoir, Minka Kelly opens up about her tumultuous journey from a challenging childhood to becoming a successful actress. Known for her roles as Lyla Garrity in Friday Night Lights and Samantha in Euphoria, Minka's public persona contrasts sharply with her early life experiences. Raised by a single mother who struggled with addiction and worked as a stripper, Minka's youth was marked by instability, moving frequently, and living in unconventional places, including storage units. Her path to Hollywood was unconventional, involving a reunion with her father, Aerosmith’s Rick Dufay, and a determined pursuit of acting. In this book, Minka reflects on her struggles and triumphs, offering a powerful narrative of resilience and love. She combines personal anecdotes with reflections on how she overcame adversity to achieve success, making this memoir not only a glimpse into her life but also a story of personal strength and transformation.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1705545094i/204811915.jpg",
        category: "Non-fiction",
        releasedDate: "15-03-2022",
        recommendation: "none",
      },
      {
        id: "25",
        title: "The Life Impossible",
        author: "Matt Haig",
        price: 269,
        description:
          "Matt Haig’s latest novel, following the success of The Midnight Library, is a mesmerizing tale of discovery and transformation. In this story, Grace Winters, a retired math teacher, is unexpectedly bequeathed a dilapidated house on the Mediterranean island of Ibiza by a long-lost friend. With no guidebook and only a one-way ticket, Grace embarks on a journey of curiosity and self-exploration. As Grace explores the rugged landscapes and sunlit shores of Ibiza, she delves into the mysteries surrounding her friend’s life and death. What she uncovers challenges her understanding of reality and forces her to confront her own past. The novel weaves together elements of wonder, adventure, and personal growth, ultimately highlighting the profound impact of embracing the unknown and the transformative power of new beginnings.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1707411860i/198281740.jpg",
        category: "Fiction Fantasy",
        releasedDate: "22-10-2024",
        recommendation: "Best this year",
      },
      {
        id: "26",
        title: "Think Again",
        author: "Adam Grant",
        price: 399,
        description:
          "Think Again by Adam Grant explores the value of rethinking and being open to changing one's mind. Key points include: Personal Rethinking: Embracing doubt and adapting one's views is more productive than sticking rigidly to one’s initial beliefs. Grit alone can be counterproductive if it prevents reconsideration and growth. Influencing Others: Teaching 'argument literacy' helps individuals engage in constructive debates and consider different perspectives, fostering a culture of rethinking. Institutional Change: Many organizations and institutions fail to promote a culture of rethinking. Grant emphasizes the need for environments that support continuous learning and adaptability. Overall, the book highlights how developing the skill of rethinking can provide a competitive advantage in a rapidly changing world.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602574232i/55539565.jpg",
        category: "Non-fiction",
        releasedDate: "02-02-2021",
        recommendation: "All time Top",
      },
      {
        id: "27",
        title: "Blue Sisters",
        author: "Coco Mellors",
        price: 399,
        description:
          "Three estranged sisters—Avery, Bonnie, and Lucky—are forced to reunite in New York after their beloved sister, Nicky, dies unexpectedly. Each sister has led a vastly different life: Avery is a recovering heroin addict turned lawyer in London, Bonnie is a former boxer working as a bouncer in Los Angeles, and Lucky is a model in Paris trying to escape her past. As they grapple with grief, addiction, and their ambitions, they must confront their childhood disappointments and the secrets they've kept—not just from each other, but from themselves—while dealing with the sale of their family home.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1706564543i/195430687.jpg",
        category: "Queer Fiction",
        releasedDate: "03-09-2021",
        recommendation: "none",
      },
      {
        id: "28",
        title: "Intermezzo",
        author: "Sally Rooney",
        price: 499,
        description:
          "Think Again by Adam Grant explores the value of rethinking and being open to changing one's mind. Key points include: Personal Rethinking: Embracing doubt and adapting one's views is more productive than sticking rigidly to one’s initial beliefs. Grit alone can be counterproductive if it prevents reconsideration and growth. Influencing Others: Teaching 'argument literacy' helps individuals engage in constructive debates and consider different perspectives, fostering a culture of rethinking. Institutional Change: Many organizations and institutions fail to promote a culture of rethinking. Grant emphasizes the need for environments that support continuous learning and adaptability. Overall, the book highlights how developing the skill of rethinking can provide a competitive advantage in a rapidly changing world.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1716387455i/208931300.jpg",
        category: "Fiction Romance",
        releasedDate: "3-09-2024",
        recommendation: "none",
      },
    ];

    await Book.insertMany(books);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();

app.get("/api/books", async (req, res) => {
  try {
    const allBooks = await Book.find();

    res.json(allBooks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// 715425BR     