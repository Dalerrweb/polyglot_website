import Head from 'next/head';
import * as React from 'react';

export interface IHeadMeta {
    title: string;
}

const HeadMeta: React.FC<IHeadMeta> = ({ title }) => {
  return (
    <Head>
            <title>{title}</title>
            <meta name="keywords" content="Polyglot Samarkand, English School Samarkand, Learn English Samarkand, Language School Samarkand, English Classes Samarkand, Language Learning Samarkand, English Lessons Samarkand, IELTS Preparation Samarkand, TOEFL Preparation Samarkand, ESOL Samarkand"/>
            <meta name="description" content="Polyglot is an English school in Samarkand offering a wide range of English language courses and preparation for exams such as IELTS, TOEFL, and ESOL. Join us to improve your English skills and achieve your language goals."/>
            <meta name="keywords" content="Полиглот Самарканд, Английская школа Самарканд, Изучение английского Самарканд, Языковая школа Самарканд, Уроки английского Самарканд, Обучение языкам Самарканд, Уроки английского языка Самарканд, Подготовка к экзамену IELTS Самарканд, Подготовка к экзамену TOEFL Самарканд, ESOL Самарканд"/>
            <meta name="description" content="Полиглот - английская школа в Самарканде, предлагающая широкий спектр курсов английского языка и подготовку к экзаменам, таким как IELTS, TOEFL и ESOL. Присоединяйтесь к нам, чтобы улучшить свои навыки английского и достичь своих языковых целей."/>
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Polyglot" />
            <meta name="google-site-verification" content="da3HAE5N-JeHaSqIZ8t-gKW8-mzjv0hedsgDXEpo2uc" />
            <link rel="icon" type="image/png" href="images/icon.png" />
        </Head>
  );
}

export default HeadMeta;