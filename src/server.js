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
    },

    routes() {
        this.namespace = "api";
        this.logging = false;
        this.timing = 2000;

        this.get("/classes", (schema) => {
            return schema.classes.all();
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
    }
});