import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss'
import Prismic from '@prismicio/client'

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>12 de agosto de 2021</time>
                        <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eos distinctio quia pariatur iusto libero harum! Similique labore fuga aspernatur cum laudantium tempore quibusdam suscipit nulla minima consequuntur! Aut, ducimus!</p>
                    </a>
                    <a href="#">
                        <time>12 de agosto de 2021</time>
                        <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eos distinctio quia pariatur iusto libero harum! Similique labore fuga aspernatur cum laudantium tempore quibusdam suscipit nulla minima consequuntur! Aut, ducimus!</p>
                    </a>
                    <a href="#">
                        <time>12 de agosto de 2021</time>
                        <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eos distinctio quia pariatur iusto libero harum! Similique labore fuga aspernatur cum laudantium tempore quibusdam suscipit nulla minima consequuntur! Aut, ducimus!</p>
                    </a>
                </div>
            </main>
        </>
    );
}

// export const getStaticProps: GetStaticProps = async () => {
//     const prismic = getPrismicClient()
//     const response = await prismic.query([
//         Prismic.predicates.at('document.type', 'posts')
//     ], {
//         fetch: ['publication.title', 'publication.content'],
//         pageSize: 100
//     })

//     console.log(response)
//     return {
//         props: {}
//     }
// }