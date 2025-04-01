import { createServer, Model, Response } from "miragejs";

createServer({
    models: {
        classes: Model,
        users: Model
    },

    seeds(server) {
        const instructors = [
            { name: "Carlos García", score: 4.8, spokenLanguages: "Spanish, English", interests: "Hiking, Photography", picture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRzaG90fGVufDB8fDB8fHww' },
            { name: "Sofía Martínez", score: 4.5, spokenLanguages: "Spanish, French", interests: "Cooking, Traveling", picture: 'https://images.unsplash.com/photo-1606335192038-f5a05f761b3a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWRzaG90fGVufDB8fDB8fHww' },
            { name: "Luis Fernández", score: 4.9, spokenLanguages: "Spanish, German, English", interests: "Chess, Videogames", picture: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYWRzaG90fGVufDB8fDB8fHww' },
            { name: "María López", score: 4.7, spokenLanguages: "Spanish, Portuguese", interests: "Dancing, Yoga", picture: 'https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWRzaG90fGVufDB8fDB8fHww' },
            { name: "Javier Torres", score: 5.0, spokenLanguages: "Spanish, Italian", interests: "Cycling, Tech Gadgets", picture: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D' }
        ];

        // Ordered by time
        server.create("class", { 
            id: "1", 
            level: "B1", 
            lessonName: "Giving Directions in Spanish", 
            time: "9:00 AM", 
            price: 18, 
            enrolledStudents: 4,
            description: "Never get lost again! Learn how to ask for and give directions in Spanish with phrases like 'Siga derecho' (Go straight) and 'Gire a la izquierda' (Turn left).",
            instructor: instructors[0]
        });

        server.create("class", { 
            id: "2", 
            level: "A1", 
            lessonName: "Basic Greetings & Introductions", 
            time: "10:00 AM", 
            price: 15, 
            enrolledStudents: 3,
            description: "In this beginner-friendly class, you’ll learn how to confidently greet people, introduce yourself, and start a basic conversation in Spanish.",
            instructor: instructors[0]
        });

        server.create("class", { 
            id: "3", 
            level: "B2", 
            lessonName: "Debating & Expressing Opinions", 
            time: "11:00 AM", 
            price: 25, 
            enrolledStudents: 1,
            description: "Speak your mind in Spanish! This class teaches you how to express opinions, agree and disagree, and debate effectively.",
            instructor: instructors[1]
        });

        server.create("class", { 
            id: "4", 
            level: "A1", 
            lessonName: "Numbers & Asking for Prices", 
            time: "12:00 PM", 
            price: 18, 
            enrolledStudents: 4,
            description: "Master numbers in Spanish! This class covers numbers 1-100 and how to ask for prices in stores and markets.",
            instructor: instructors[1]
        });

        server.create("class", { 
            id: "5", 
            level: "B2", 
            lessonName: "Understanding Spanish Humor & Idioms", 
            time: "2:00 PM", 
            price: 20, 
            enrolledStudents: 5,
            description: "Laugh and learn! This class explores common Spanish idioms and jokes to help you understand cultural humor.",
            instructor: instructors[2]
        });

        server.create("class", { 
            id: "6", 
            level: "A2", 
            lessonName: "Ordering Food in Spanish", 
            time: "3:00 PM", 
            price: 20, 
            enrolledStudents: 5,
            description: "Never struggle at a Spanish restaurant again! In this class, you'll practice ordering food and asking for recommendations.",
            instructor: instructors[2]
        });

        server.create("class", { 
            id: "7", 
            level: "C1", 
            lessonName: "Advanced Business Spanish", 
            time: "4:00 PM", 
            price: 30, 
            enrolledStudents: 3,
            description: "Prepare for professional interactions in Spanish! Learn how to write formal emails, give presentations, and negotiate contracts.",
            instructor: instructors[3]
        });

        server.create("class", { 
            id: "8", 
            level: "A2", 
            lessonName: "Talking About Daily Routines", 
            time: "5:00 PM", 
            price: 17, 
            enrolledStudents: 2,
            description: "Learn to describe your daily routine in Spanish using essential verbs like 'despertarse' (to wake up) and 'trabajar' (to work).",
            instructor: instructors[3]
        });

        server.create("class", { 
            id: "9", 
            level: "C1", 
            lessonName: "Discussing Global Issues in Spanish", 
            time: "6:00 PM", 
            price: 28, 
            enrolledStudents: 2,
            description: "Engage in meaningful discussions on global topics like climate change, technology, and social issues in Spanish.",
            instructor: instructors[4]
        });

        server.create("class", { 
            id: "10", 
            level: "B1", 
            lessonName: "Telling Stories in the Past", 
            time: "7:00 PM", 
            price: 22, 
            enrolledStudents: 3,
            description: "Master the past tenses in Spanish! Learn when to use the preterite vs. imperfect and practice telling stories.",
            instructor: instructors[4]
        });

        // Past Classes 

        server.create("class", { 
            id: "11", 
            level: "A2", 
            lessonName: "Basic Shopping Conversations", 
            time: "Completed", 
            price: 18, 
            enrolledStudents: 6,
            date: "2024-02-15",
            description: "This class covered the essential vocabulary and phrases for shopping in Spanish. We practiced asking for prices, sizes, and colors in various store settings. Role-playing exercises helped reinforce sentence structure and pronunciation. Additionally, we learned cultural aspects of shopping etiquette in Spanish-speaking countries. By the end, students could confidently hold simple shopping conversations.",
            instructor: instructors[0]
        });

        server.create("class", { 
            id: "12", 
            level: "B1", 
            lessonName: "Making Restaurant Reservations", 
            time: "Completed", 
            price: 20, 
            enrolledStudents: 4,
            date: "2024-03-22",
            description: "This lesson focused on the art of making restaurant reservations over the phone or in person. Students practiced key phrases for specifying dates, times, and seating preferences. The class included listening comprehension activities with real restaurant dialogues. Cultural nuances, such as polite expressions and formal speech, were also covered. By the end, students were able to confidently book tables and handle unexpected questions from restaurant staff.",
            instructor: instructors[1]
        });

        server.create("class", { 
            id: "13", 
            level: "B2", 
            lessonName: "Talking About Hobbies & Interests", 
            time: "Completed", 
            price: 22, 
            enrolledStudents: 5,
            date: "2024-01-10",
            description: "In this class, students expanded their vocabulary related to hobbies, sports, and leisure activities. We focused on expressing preferences, opinions, and discussing shared interests. Through interactive speaking exercises, students improved fluency and learned how to structure conversations naturally. We also explored idiomatic expressions related to hobbies and pastimes. By the end, participants could confidently discuss their favorite activities in Spanish.",
            instructor: instructors[2]
        });

        server.create("class", { 
            id: "14", 
            level: "C1", 
            lessonName: "Advanced Spanish for Work Emails", 
            time: "Completed", 
            price: 30, 
            enrolledStudents: 3,
            date: "2023-12-05",
            description: "This course provided students with the necessary skills to write clear, concise, and professional emails in Spanish. We covered proper greetings, formatting, and tone depending on the formality of the email. Common business phrases and expressions were introduced to make emails sound more natural. Students also practiced proofreading and editing their messages. By the end, they could write emails with confidence in a professional setting.",
            instructor: instructors[3]
        });

        server.create("class", { 
            id: "15", 
            level: "A1", 
            lessonName: "Introducing Yourself in Spanish", 
            time: "Completed", 
            price: 15, 
            enrolledStudents: 6,
            date: "2024-04-08",
            description: "This class helped absolute beginners introduce themselves with confidence in Spanish. We practiced greetings, stating our names, talking about where we’re from, and sharing basic personal information. Through guided dialogues and practice exercises, students developed a strong foundation for social conversations. The lesson also covered polite ways to ask for someone’s name and respond naturally. By the end, students could comfortably introduce themselves and make small talk in Spanish.",
            instructor: instructors[4]
        });

    },

    routes() {
        this.namespace = "api";
        this.logging = false;
        this.timing = 2000;

        this.get("/classes", (schema) => {
            // return new Response(400, {}, {error: 'Error fetching data'})
            return schema.classes.where((cls) => cls.date === undefined);
        });

        this.get("/classes/:id", (schema, request) => {
            const id = request.params.id;
            return schema.classes.find(id);
        });

        this.post("/login", (schema, request) => {
            const { email, password } = JSON.parse(request.requestBody);
            const foundUser = schema.users.findBy({ email, password });
            if (!foundUser) {
                return new Response(401, {}, { message: "Invalid credentials" });
            }
            return {
                user: foundUser,
                token: "fake-jwt-token"
            };
        });

         // New API Endpoint: My Learning (Past Classes)
        this.get("/my-learning/my-classes", (schema) => {
            return schema.classes.where((cls) => cls.date !== undefined);
        });

        this.get("/my-learning/my-classes/:id", (schema, request) => {
            const id = request.params.id;
            return schema.classes.where({ id });
        });

    }
});