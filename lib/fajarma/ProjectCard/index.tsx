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
    >
      <div className={css.wrapper}>
        <div className={css.previewWrapper} data-expanded={dataExpanded}>
          {expanded ? (
            previewComp
          ) : (
            <Image src={thumbnail} className={css.thumbnail} />
          )}
        </div>
        <div className={css.content}>
          <button
            type="button"
            className={css.head}
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
          >
            <h3 className={css.title}>{title}</h3>
            <div className={css.chevron}>
              {expanded ? icon.collapse : icon.expand}
            </div>
          </button>
          <p className={css.desc}>{desc}</p>
          <div className={css.extra} data-expanded={dataExpanded}>
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
      <div className={css.btnWrapper} data-expanded={dataExpanded}>
        <a
          className={css.liveBtn}
          href={urlAvailable || '#!'}
          aria-disabled={!urlAvailable}
          target={urlAvailable ? '_blank' : ''}
        >
          <div className={css.text}>
            {urlAvailable ? icon.link : icon.noLink}
            <b>{desktopUrl ? 'Desktop only' : url || 'Not deployed yet'}</b>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
