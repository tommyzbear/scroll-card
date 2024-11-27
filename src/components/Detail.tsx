import React from "react";
import { motion } from "framer-motion";
import { LoremIpsum } from "react-lorem-ipsum";
import styles from './style.module.scss';
// import { Link } from "react-router-dom";
// import { items } from "./data";

export function Item({ id, src, title, setSelectedId }: { id: number, src: string, title: string, setSelectedId: (id: number) => void }) {
    // const { category, title } = items.find((item) => item.id === id);

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                style={{ pointerEvents: "auto" }}
                className={styles.overlay}
                onClick={() => setSelectedId(-1)}
            >
                {/* <Link to="/" /> */}
                <div className="w-full h-full">
                    <motion.div className={styles.cardContent} layoutId={`card-container-${id}`}>
                        <motion.div
                            className={styles.detailImageContainer}
                            layoutId={`card-image-container-${id}`}
                        >
                            <img className={styles.inner} src={`images/${src}`} alt="" />
                        </motion.div>
                        <motion.div
                            className={styles.titleContainer}
                            layoutId={`title-container-${id}`}
                        >
                            <h2>{title}</h2>
                        </motion.div>
                        <motion.div className={styles.contentContainer} animate>
                            <LoremIpsum
                                p={6}
                                avgWordsPerSentence={6}
                                avgSentencesPerParagraph={4}
                            />
                        </motion.div>
                    </motion.div>

                </div>
            </motion.div>
            {/* <div className={`${styles.open} h-full w-full`}>
                <motion.div className={styles.cardContent} layoutId={`card-container-${id}`}>
                    <motion.div
                        className={styles.detailImageContainer}
                        layoutId={`card-image-container-${id}`}
                    >
                        <img className={styles.inner} src={`images/${src}`} alt="" />
                    </motion.div>
                    <motion.div
                        className={styles.titleContainer}
                        layoutId={`title-container-${id}`}
                    >
                        <h2>title</h2>
                    </motion.div>
                    <motion.div className={styles.contentContainer} animate>
                        <LoremIpsum
                            p={6}
                            avgWordsPerSentence={6}
                            avgSentencesPerParagraph={4}
                        />
                    </motion.div>
                </motion.div>
            </div> */}
        </>
    );
}
