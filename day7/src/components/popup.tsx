export default function Popup({ onClose }: { onClose: () => void }) {
    return (
      <div className="fixed flex items-center justify-center bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold">Hello this is an pop-up</h2>
          <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
            Close
          </button>
        </div>
      </div>
    );
  }
  