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

      <div className="fixed inset-0 flex items-center justify-center p-4 ">

        <Dialog.Panel className="w-full max-w-sm rounded bg-white p-10">
            <div className="flex justify-end">
        <Button onClick={() => setIsOpen(false)} >x</Button>
        </div>
          <Dialog.Title>{starship.name}</Dialog.Title>
          <Dialog.Description>
            <div>Cost : {starship.cost_in_credits}</div>
            <div>
              Featured Films :
              {starship.filmIds.map((movieId, idx) => (
                  <Link href={"/"+movieId}>
                      <a>
                <MovieListItem key={idx} movieId={movieId}  />
                </a>
                </Link>
              ))}
            </div>
            <div>Length : {starship.length}</div>
            <div>Max Atmospheric Speed : {starship.max_atmosphering_speed}</div>

            <div>Crew : {starship.crew}</div>
          </Dialog.Description>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default StarShipModal;
