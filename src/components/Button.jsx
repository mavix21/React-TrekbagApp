export function Button({ buttonType, children, onClick: handleClick }) {
  return (
    <button
      className={`btn ${buttonType === 'secondary' ? 'btn--secondary' : ''}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
