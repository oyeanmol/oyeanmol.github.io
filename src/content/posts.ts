export interface Post {
  slug: string;
  title: string;
  date: string;
  tag: string;
  reading: string;
  excerpt: string;
  body: string;
}

export const posts: Post[] = [
  {
    slug: "api-application-pentesting-basics",
    title: "API Application Pentesting Basics to Advanced — A Hacker’s Starter Guide",
    date: "2025-05-18",
    tag: "API",
    reading: "9 min",
    excerpt:
      "A complete beginner-to-advanced guide on API pentesting, covering HTTP methods, API types, vulnerabilities, and real-world attack scenarios.",

    body: `
# What is API Pentesting?

APIs (Application Programming Interfaces) are crucial for enabling software applications to interact and integrate with each other. API penetration testing is a critical process for ensuring the security of APIs in modern applications.

## Key Characteristics of Web APIs

- **HTTP Methods:** GET, POST, PUT, DELETE  
- **Resource-based:** Data organized as resources with unique URLs  
- **Stateless:** Each request is independent  
- **Data Formats:** JSON or XML  
- **Authentication:** API keys, OAuth, JWT  
- **Versioning:** Supports multiple API versions  

## HTTP Methods

- GET → Retrieve Data  
- POST → Create Data  
- PUT → Update Data  
- DELETE → Remove Data  
- PATCH → Partial Updates  

## Types of APIs

### REST
Simple, scalable, widely used.

### SOAP
Strict protocol using XML.

### GraphQL
Flexible data querying.

## Example: E-commerce API

- /api/v1/products → list products  
- /api/v1/products/{id} → product details  
- /api/v1/cart/add → add to cart  

## Common API Vulnerabilities

- Injection Attacks  
- Broken Authentication  
- Sensitive Data Exposure  
- IDOR  
- XSS  
- DoS / DDoS  

## Prevention

- Validate input data  
- Use strong authentication (JWT, OAuth)  
- Use HTTPS  
- Apply rate limiting  
- Perform regular security testing  

## Conclusion

Understanding API vulnerabilities is essential for building secure systems. Security must be part of development, not an afterthought.
    `,
  },

  {
  slug: "llm-security-and-prompt-injection",
  title: "Hacking AI — Understanding LLM Attacks and Prompt Injections",
  date: "2024-11-30",
  tag: "AI Security",
  reading: "6 min",
  excerpt:
    "Understanding how LLMs introduce new attack surfaces like prompt injection and excessive agency, with real-world examples.",

  body: `
## What are LLMs?

Large Language Models (LLMs) improve user experience in modern applications, but they also introduce new security risks. One major issue is insecure output handling, which can lead to vulnerabilities like XSS or command injection.

LLMs are AI systems that process user input (prompts) and generate responses based on learned patterns from large datasets.

## What is Prompt Injection?

A prompt is simply the input given to an LLM. Prompt injection is an attack where malicious instructions are hidden inside normal-looking inputs, tricking the model into performing unintended actions or leaking sensitive data.

For example, an attacker can manipulate a chatbot into sending sensitive information to unintended recipients by embedding hidden instructions.

## Excessive Agency Risk

Another critical risk is excessive agency, where an LLM has access to powerful APIs. If not properly restricted, attackers can trick the model into executing sensitive actions like retrieving data or running commands.

## How Attackers Exploit LLMs

Attackers:
- Manipulate inputs  
- Inject hidden commands  
- Use social engineering  

They analyze how inputs are processed and how connected APIs behave.

## Real-World Risk Example

An exposed debug SQL API can be abused by injecting queries like DELETE statements, allowing attackers to manipulate databases and perform unauthorized actions.

## Prevention

To secure LLM systems:
- Validate all inputs strictly  
- Use parameterized queries  
- Enforce strong access control  
- Perform regular security testing  

## Final Thought

LLM security requires a mindset shift. Developers must think beyond functionality and consider how systems can be misused. Secure design is essential when integrating AI into applications.
  `,
},
];