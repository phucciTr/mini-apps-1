var Form = ({step, next, saveId, userId}) => {
  if (step === 1) { return <F1 nextForm={next} saveId={saveId} />; }
  if (step === 2) { return <F2 nextForm={next} userId={userId} />; }
  if (step === 3) { return <F3 nextForm={next}/>; }
}

