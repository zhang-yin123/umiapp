import { useState } from 'react';
import styles from './bar.less';
import { QuestionOutlined } from '@ant-design/icons';

export default function Bar() {
    const [userName] = useState("admin");

    return (
        <div className={styles.bar}>
            <div className={styles.left}>
                <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                <span>react</span>
            </div>
            <div className={styles.right}>
                <QuestionOutlined />
                <span>{userName}</span>
            </div>
        </div>
    );
}