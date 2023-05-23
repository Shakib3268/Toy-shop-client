import React from 'react';

const Blog = () => {
    return (
        <div className='mt-4 container mx-auto'>
            <h2 className='text-2xl font-bold mb-3'>1:What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
            <p><span>Ans:</span>It's important to note that security practices and implementation details may vary based on the specific framework, programming language, and security requirements of your application. It's always recommended to follow best practices and consult the documentation or security experts when implementing token-based authentication and authorization systems.</p>
            <h2 className='text-2xl font-bold mb-3'>2:Compare SQL and NoSQL databases?</h2>
            <p><span>Ans:</span>Choosing between SQL and NoSQL databases depends on various factors, including the specific requirements of your application, data structure, scalability needs, performance considerations, and developer familiarity. SQL databases are often favored for applications that require complex querying and strict data consistency, while NoSQL databases are popular for use cases involving large-scale data storage, rapid development, and scalability requirements. It's important to carefully evaluate your project's needs and consider the trade-offs and strengths of each database type before making a decision.</p>
            <h2 className='text-2xl font-bold mb-3'>3:What is express js? What is Nest JS?</h2>
            <p><span>Ans:</span>Express.js is a minimalistic and flexible framework that provides a lightweight and customizable approach for building web applications, while NestJS is an opinionated framework that builds upon Express.js, offering additional structure, features, and TypeScript support for building scalable and maintainable applications. The choice between the two depends on the specific needs of your project, the level of structure desired, and the trade-offs you are willing to make in terms of flexibility and development speed.</p>
            <h2 className='text-2xl font-bold mb-3'>4:What is MongoDB aggregate and how does it work ?</h2>
            <p><span>Ans:</span>The aggregate method in MongoDB provides powerful capabilities for performing complex data aggregations, making it a valuable tool for analyzing and processing data within collections.</p>
        </div>
            
    );
};

export default Blog;