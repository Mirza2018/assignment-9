import React from 'react';

const Blogs = () => {
    return (
        <div className='text-center'>
            <div className='border-2 border-indigo-600 w-80 mx-auto rounded-md my-10' >   
                <h1 className='font-bold'>What is context Api</h1>
                <p>The Context API helps share data between components which you can't easily share with props, for example, complex data objects.
                    React Context API provides a way to send data like userid, auth, and theme data through the component tree without sending any props manually at every level.
                    We can also share specific states with multiple components instead through props manually. In some use cases, ideal for theming, localization, authentication etc</p>
                    </div>
                    <div className='border-2 border-indigo-600 w-80 mx-auto rounded-md my-10' > 
                    <h1 className='font-bold'>What is Semantic tag.</h1>
                <p>Semantic HTML is the use of HTML markup to reinforce the semantics, or meaning, of the information in web pages and web applications rather than merely to define its presentation or look. Semantic HTML is processed by traditional web browsers as well as by many other user agents.</p>
                </div>


                <div className='border-2 border-indigo-600 w-80 mx-auto rounded-md' > 
                <h1 className='font-bold'>Difference between block and inline elements</h1>
                <p>Block elements always start from a new line.	Inline elements never start from a new line.
                    Block elements cover space from left to right as far as it can go.Inline elements only cover the space as bounded by the tags in the HTML element.

                    Block elements have top and bottom margins.	Inline elements don't have a top and bottom margin.

                    Examples of block elements - p,div,hr .	Examples of inline elements - span,br</p>
            </div>
            
            
            </div>




    );
};

export default Blogs;