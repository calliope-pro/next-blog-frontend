import { useState } from 'react';
import { Fab, Grow, Tooltip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import ShareIcon from '@mui/icons-material/Share';
import TwitterIcon from '@mui/icons-material/Twitter';

import { LineIcon } from '..';
import { COLORS } from '../../styles';
import { useCurrentAbsUrl } from '../../utils/hooks';

export const ShareButtons: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  const shareUrlBase = useCurrentAbsUrl();
  const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrlBase}`;
  const lineShareUrl = `https://social-plugins.line.me/lineit/share?url=${shareUrlBase}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${shareUrlBase}`;

  return (
    <>
      <Tooltip title={'Share!'} placement='top'>
        <Fab
          onClick={() => setIsClicked((prev) => !prev)}
          aria-label='share'
          sx={{ top: '50vh', right: '6vw', position: 'fixed', zIndex: 10000 }}
        >
          {isClicked ? (
            <CloseIcon sx={{ color: COLORS.accentDarkColor }} />
          ) : (
            <ShareIcon sx={{ color: COLORS.accentDarkColor }} />
          )}
        </Fab>
      </Tooltip>
      {isClicked && (
        <>
          <Grow in={isClicked} timeout={1500}>
            <Fab
              aria-label='share'
              href={twitterShareUrl}
              target='_blank'
              rel='noopener noreferrer'
              sx={{
                top: 'calc(50vh - 108px)',
                right: 'calc(6vw + 10px)',
                position: 'fixed',
                zIndex: 10000,
              }}
            >
              <TwitterIcon sx={{ color: '#1DA1F2' }} />
            </Fab>
          </Grow>

          <Grow in={isClicked} timeout={750}>
            <Fab
              aria-label='share'
              href={fbShareUrl}
              target='_blank'
              rel='noopener noreferrer'
              sx={{
                top: 'calc(50vh - 76px)',
                right: 'calc(6vw + 76px)',
                position: 'fixed',
                zIndex: 10000,
              }}
            >
              <FacebookIcon sx={{ color: '#4267B2' }} />
            </Fab>
          </Grow>

          <Grow in={isClicked}>
            <Fab
              aria-label='share'
              href={lineShareUrl}
              target='_blank'
              rel='noopener noreferrer'
              sx={{
                top: 'calc(50vh - 10px)',
                right: 'calc(6vw + 108px)',
                position: 'fixed',
                zIndex: 10000,
              }}
            >
              <LineIcon />
            </Fab>
          </Grow>
        </>
      )}
    </>
  );
};
