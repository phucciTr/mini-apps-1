var Form = ({step, next}) => {
  if (step === 1) { return <F1 nextForm={next}/>; }
  if (step === 2) { return <F2 nextForm={next}/>; }
  if (step === 3) { return <F3 nextForm={next}/>; }
}

