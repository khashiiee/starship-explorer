import { Dialog } from "@headlessui/react";
import Link from "next/link";
import Button from "../Button";
import MovieListItem from "../StarshipCard/MovieListItem";

function StarShipModal({ isOpen, setIsOpen, starship }) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50 "
    >
      <div className="fixed inset-0 bg-black/30 " />

      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="w-full max-w-sm rounded bg-white p-4">
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="font-bold text-lg">
              {starship.name}
            </Dialog.Title>
            <Button onClick={() => setIsOpen(false)}>x</Button>
          </div>

          <Dialog.Description>
            <div>Cost: {starship.cost_in_credits}</div>
            <div>Length: {starship.length}</div>
            <div>Max Atmospheric Speed: {starship.max_atmosphering_speed}</div>
            <div>Crew: {starship.crew}</div>

            <div className="my-2">
              Featured Films:
              {starship.filmIds.map((movieId, idx) => (
                <Link key={idx} href={"/" + movieId}>
                  <a className="text-blue-600 hover:text-blue-800 hover:underline">
                    <MovieListItem movieId={movieId} />
                  </a>
                </Link>
              ))}
            </div>
          </Dialog.Description>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default StarShipModal;
