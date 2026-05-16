import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Hi!',
    img: require('@site/static/img/Headshot-2019-Cropped.jpg').default,
    sections: [
      { 
        heading: "I'm Paul", 
        body: [
          'I am an engineer and I love building things. Going through the process of understanding a problem, concepting ideas, iterating designs, and finally creating an end result is thrilling. There are few things more satisfying than finally hitting on that simple, elegant solution after hours of thought.',
          'I love learning new things. The preferred approach is dive in and try it. Different endeavors significantly afield my schooling have included flying, CNC machining, glass making, artificial intelligence, and mindfulness. Learning by working through real problems has proven to be far more valuable than just reading about concepts. It is incredibly exciting when concepts that were in books are demonstrated in the real world with a clear understanding of what is at play.'
        ] 
      },
      { 
        heading: 'Personal Life', 
        body: ['Spending time with my wife and son outside is far and above my favorite past time. We particularly enjoy the Boundary Waters in Minnesota and the beach at St George Island in Florida. When I’m not tinkering in my garage or outdoors with my family, you might find me flying recreationally, working on rebuilding a Velocity SERG, or acting as an Assistant Scoutmaster for Troop 303.'] 
      }
    ],
  }
];

function Feature({img, title, sections}) {
  return (
    <div className={clsx('col col--12')}>
      
      
      <div className="text--center">
        <img 
          src={img} 
          className={styles.featureImg} 
          alt={title} 
        />
      </div>
      
      <div className="text--center padding-horiz--md">
        <Heading as="h1">{title}</Heading>

        {sections.map((section, idx) => (
          <div key={idx} style={{ marginBottom: '2rem' }}>
            <Heading as="h2">{section.heading}</Heading>
            
            {/* Loop through the paragraphs in this section */}
            {section.body.map((paragraph, pIdx) => (
              <p key={pIdx} style={{ marginBottom: '1rem' }}>
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/*const FeatureList = [
  {
    title: "Hi!  I'm Paul",
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    sections: [
      { 
        heading: 'First Point', 
        body: [
          'This is the first paragraph of the first section.',
          'This is the second paragraph of that same section.'
        ] 
      },
      { 
        heading: 'Second Point', 
        body: ['Just one paragraph here.'] 
      }
    ]
    
    )
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}*/

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
