import type {NextPage} from 'next'
import Head from 'next/head'
import styles from './Home.module.css'

const HomePage: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>44RON MOLES</title>
                <meta name="description" content="Blog personal de Aarón Molés Tormo"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <header className={styles.header}>
                    <h1 className={styles.title}>Aarón <span className={styles.lastName}>Molés</span></h1>
                    <h2 className={styles.subtitle}>FullStack Developer</h2>
                </header>

                <div className={styles.infoContainer}>
                    <article className={styles.info}>
                        <h1>+10</h1>
                        <p>Años</p>
                    </article>
                    <article className={styles.info}>
                        <h1>+50</h1>
                        <p>Proyectos</p>
                    </article>
                    <article className={styles.info}>
                        <h1>3</h1>
                        <p>Empresas</p>
                    </article>
                </div>

                <section className={styles.technologies}>

                </section>
            </main>


            <footer className={styles.footer}>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg=="/>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptNi4wNjYgOS42NDVjLjE4MyA0LjA0LTIuODMgOC41NDQtOC4xNjQgOC41NDQtMS42MjIgMC0zLjEzMS0uNDc2LTQuNDAyLTEuMjkxIDEuNTI0LjE4IDMuMDQ1LS4yNDQgNC4yNTItMS4xODktMS4yNTYtLjAyMy0yLjMxNy0uODU0LTIuNjg0LTEuOTk1LjQ1MS4wODYuODk1LjA2MSAxLjI5OC0uMDQ5LTEuMzgxLS4yNzgtMi4zMzUtMS41MjItMi4zMDQtMi44NTMuMzg4LjIxNS44My4zNDQgMS4zMDEuMzU5LTEuMjc5LS44NTUtMS42NDEtMi41NDQtLjg4OS0zLjgzNSAxLjQxNiAxLjczOCAzLjUzMyAyLjg4MSA1LjkyIDMuMDAxLS40MTktMS43OTYuOTQ0LTMuNTI3IDIuNzk5LTMuNTI3LjgyNSAwIDEuNTcyLjM0OSAyLjA5Ni45MDcuNjU0LS4xMjggMS4yNy0uMzY4IDEuODI0LS42OTctLjIxNS42NzEtLjY3IDEuMjMzLTEuMjYzIDEuNTg5LjU4MS0uMDcgMS4xMzUtLjIyNCAxLjY0OS0uNDUzLS4zODQuNTc4LS44NyAxLjA4NC0xLjQzMyAxLjQ4OXoiLz48L3N2Zz4=" />
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptLTIgMTZoLTJ2LTZoMnY2em0tMS02Ljg5MWMtLjYwNyAwLTEuMS0uNDk2LTEuMS0xLjEwOSAwLS42MTIuNDkyLTEuMTA5IDEuMS0xLjEwOXMxLjEuNDk3IDEuMSAxLjEwOWMwIC42MTMtLjQ5MyAxLjEwOS0xLjEgMS4xMDl6bTggNi44OTFoLTEuOTk4di0yLjg2MWMwLTEuODgxLTIuMDAyLTEuNzIyLTIuMDAyIDB2Mi44NjFoLTJ2LTZoMnYxLjA5M2MuODcyLTEuNjE2IDQtMS43MzYgNCAxLjU0OHYzLjM1OXoiLz48L3N2Zz4=" />
            </footer>
        </div>
    )
}

export default HomePage
