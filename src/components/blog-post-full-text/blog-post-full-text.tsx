import React from 'react';
import { Container } from 'semantic-ui-react';
import './blog-post-full-text.less';

interface Props {
content: any;
}

export default function BlogPostFullText({ content }: Props) {
    return (
        <section className="blog-blog-full-text">
            <Container text>
                <article>{content.content}</article>
            </Container>
        </section>
    );
}
