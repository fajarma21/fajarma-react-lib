import { useState } from 'react';
import ProjectCard from '../../../lib/fajarma/ProjectCard';
import { useIntersect } from '../../../lib/main';
import { DUMMY_PROJECT_CARD } from '../../constants/project';

import css from './index.module.scss';

const Card = () => {
  const [visible, setVisible] = useState(false);

  const { ref } = useIntersect<HTMLDivElement>(setVisible);

  return (
    <div ref={ref}>
      {
        <ProjectCard
          className={css.container}
          desc={DUMMY_PROJECT_CARD.desc}
          desktopOnly={DUMMY_PROJECT_CARD.desktopOnly}
          icon={{
            expand: <span>+</span>,
            collapse: <span>-</span>,
            repo: <span>GH</span>,
            link: <span>Link</span>,
            noLink: <span>NL</span>,
            stacks: <span>Stacks</span>,
          }}
          isMobile={false}
          previewComp={undefined}
          repo={DUMMY_PROJECT_CARD.repo}
          stacks={DUMMY_PROJECT_CARD.stacks}
          thumbnail={DUMMY_PROJECT_CARD.thumbnail}
          title={DUMMY_PROJECT_CARD.title}
          url={DUMMY_PROJECT_CARD.url}
          visible={visible}
        />
      }
    </div>
  );
};

export default Card;
