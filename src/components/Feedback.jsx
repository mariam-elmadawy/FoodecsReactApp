export default function Feedback() {
  return (
    <div>
      <div className="md:flex-row md:justify-around md:items-center gap-3 paddings text-center py-5 text-xl md:text-md flexCol">
        <h1 className="text-2xl headText uppercase">What are people saying?</h1>
        <div>
          Easy
          <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          Healthy
          <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          Great
          <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
}
