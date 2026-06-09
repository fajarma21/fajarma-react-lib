import { Fragment, useState } from 'react';

import classNames from '../../utils/classNames';
import Image from '../Image';
import css from './index.module.scss';
import type { ProjectCardProps } from './index.types';

const ProjectCard = ({
  className = '',
  desc,
  desktopOnly,
  icon,
  isMobile,
  previewComp,
  repo,
  stacks,
  thumbnail,
  title,
  url,
  visible,
}: ProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const dataExpanded = expanded || undefined;

  const desktopUrl = isMobile && desktopOnly;
  const urlAvailable = !desktopUrl && url;
  const stacksList = stacks.map((item) => JSON.parse(item || '{}'));

  return (
    <div
      className={classNames(css.item, className)}
      data-visible={visible || undefined}
      data-expanded={dataExpanded}
    >
      <div className={css.wrapper}>
        <div className={css.previewWrapper}>
          {previewComp}
          <Image src={thumbnail} className={css.thumbnail} />
        </div>
        <div className={css.content}>
          <button
            type="button"
            className={css.head}
            onClick={() => setExpanded((prev) => !prev)}
          >
            <h3 className={css.title}>{title}</h3>
            <div className={css.chevron}>
              {icon.collapse}
              {icon.expand}
            </div>
          </button>
          <div className={css.extra}>
            <p className={css.desc}>{desc}</p>
            <div className={css.row}>
              <div className={css.icon}>{icon.stacks}</div>
              <div className={css.stacks}>
                {stacksList.map((stack, index) => (
                  <Fragment key={`stack-${index}`}>
                    <a href={stack.url} target="_blank">
                      {stack.name}
                    </a>
                    {index < stacksList.length - 1 && <>, </>}
                  </Fragment>
                ))}
              </div>
            </div>
            {repo.length > 0 && (
              <div className={css.row}>
                <div className={css.icon}>{icon.repo}</div>
                <div className={css.repo}>
                  {repo.map((item, index) => (
                    <a
                      key={`stack-${index}`}
                      href={item}
                      target="_blank"
                      className={css.list}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={css.btnWrapper}>
        <a
          className={css.liveBtn}
          href={urlAvailable || '#!'}
          aria-disabled={!urlAvailable}
          target={urlAvailable ? '_blank' : ''}
        >
          <div className={css.text}>
            {urlAvailable ? icon.link : icon.noLink}
            <b>{desktopUrl ? 'Desktop only' : title || 'Not deployed yet'}</b>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
