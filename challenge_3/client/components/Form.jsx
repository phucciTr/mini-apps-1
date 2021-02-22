var Form = ({step, next, saveId, userId, addToSummary, summary, getHome}) => {
  if (step === 1) { return <F1 nextForm={next} saveId={saveId} addToSummary={addToSummary} />; }
  if (step === 2) { return <F2 nextForm={next} userId={userId} addToSummary={addToSummary} />; }
  if (step === 3) { return <F3 nextForm={next} userId={userId} addToSummary={addToSummary} />; }
  if (step === 4) { return <Confirmation nextForm={next} userId={userId} addToSummary={addToSummary} summary={summary} getHome={getHome} />}
}

