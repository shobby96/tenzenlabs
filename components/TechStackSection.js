import { Box, Typography, Grid, Paper } from "@mui/material";
import Image from "next/image";

const techCategories = [
    {
        title: "FRONT-END",
        items: [
            { name: "Angular", logo: "/logos/angular.svg" },
            { name: "React", logo: "/logos/react.svg" },
            { name: "Vue", logo: "/logos/vue.svg" },
            { name: "Next.js", logo: "/logos/nextjs.svg" },
            { name: "Flutter", logo: "/logos/flutter.svg" },
        ],
    },
    {
        title: "BACK-END & DATABASES",
        items: [
            { name: "Node.js", logo: "/logos/nodejs.svg" },
            { name: "Express.js", logo: "/logos/express.svg" },
            { name: "NestJS", logo: "/logos/nestjs.svg" },
            { name: "Python", logo: "/logos/python.svg" },
            { name: "FastAPI", logo: "/logos/fastapi.svg" },
            { name: "MongoDB", logo: "/logos/mongodb.svg" },
            { name: "PostgreSQL", logo: "/logos/postgressql.svg" },
            { name: "Redis", logo: "/logos/redis.svg" },
            { name: "AWS", logo: "/logos/aws.svg" },
            { name: "Cloudflare", logo: "/logos/cloudflare.svg" },
            { name: "RabbitMQ", logo: "/logos/rabbitmq.svg" },
        ],
    },
    {
        title: "INFRASTRUCTURE",
        items: [
            { name: "Google Cloud", logo: "/logos/googlecloud.svg" },
            { name: "AWS", logo: "/logos/aws.svg" },
            { name: "Microsoft Azure", logo: "/logos/microsoftazure.svg" },
            { name: "Digital Ocean", logo: "/logos/digitalocean.svg" },
            { name: "Kubernetes", logo: "/logos/kubernetes.svg" },
            { name: "Red Hat", logo: "/logos/redhat.svg" },
            { name: "Cloudflare", logo: "/logos/cloudflare.svg" },
        ],
    },
    {
        title: "AI DATA FRAMEWORKS",
        items: [
            { name: "PrivateGPT", logo: "/logos/privategpt.svg" },
            { name: "LlamaIndex", logo: "/logos/llamaindex.svg" },
            { name: "AutoGPT", logo: "/logos/autogpt.svg" },

        ],
    },
];

export default function TechStackSection() {
    return (
        <Box sx={{ paddingX: '9rem', boxSizing:'border-box', textAlign: "center", color: "#fff", width:'100%' }}>
            <Typography variant="h4" fontWeight="bold">
                The tech behind our products
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: "700px", margin: "auto", marginTop: "0.5rem", opacity: 0.8 }}>
                Our team of developers has a range of experience in cutting-edge technologies. This allows us to create a tailor-made tech stack that will best support your project’s needs.
            </Typography>

            {techCategories.map((category, index) => (
                <Box key={index} sx={{ marginTop: "2rem", textAlign: "left" }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", opacity: 0.8 }}>
                        {category.title}
                    </Typography>
                    <Grid container spacing={2} sx={{ marginTop: "0.5rem" }}>
                        {category.items.map((tech, idx) => (
                            <Grid item key={idx} xs={6} sm={4} md={3} lg={2}>
                                <Paper
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "0.5rem",
                                        padding: "8px 12px",
                                        backgroundColor: "rgba(255,255,255,0.05)",
                                        backdropFilter: "blur(10px)",
                                        borderRadius: "8px",
                                        border: "1px solid rgba(255, 255, 255, 0.1)",
                                        color: "#fff",
                                        fontWeight: "bold",
                                        textAlign: "center",
                                        cursor: "pointer",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            backgroundColor: "rgba(255,255,255,0.1)",
                                            border: "1px solid rgba(255,255,255,0.2)",
                                        },
                                    }}
                                >
                                    <Image src={tech.logo} alt={tech.name} width={24} height={24} />
                                    <Typography variant="body2">{tech.name}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            ))}
        </Box>
    );
}
