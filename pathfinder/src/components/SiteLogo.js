import logoImg from '../CareerGuide logo with compass symbol.png';
import './SiteLogo.css';

function SiteLogo({ size = 'large', linkToHome = false }) {
  const className = `site-logo site-logo-${size}`;

  const img = (
    <img src={logoImg} alt="CareerGuide" className={className} />
  );

  if (linkToHome) {
    return (
      <button
        className="site-logo-link"
        onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}
        aria-label="Go to homepage"
      >
        {img}
      </button>
    );
  }

  return img;
}

export default SiteLogo;
