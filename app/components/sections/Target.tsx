import Image from "next/image";

export default function Target(){
    return(
        //* Columns created with tailwind grids
        // !Add Class Name
        <div className="">
            <div className="grid grid-cols-2 items-center px-14 py-4">
                <div className="col-start-1 justify-end"> 
                    <Image
                    src="/oldppl.png"
                    alt="Description of the photo"
                    width={280}
                    height={260}
                    />
                </div>
                <div className="col-start-2">
                    <h2>Older Adults</h2>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, esse?</span>
                </div>
            </div>
        </div>
    )
}