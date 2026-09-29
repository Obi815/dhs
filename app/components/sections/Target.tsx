import Image from "next/image";
export default function Target(){
    return(
        <div className="grid grid-col-1 items-center">
            <Image
            src="/public/file.svg"
            alt="Description of the photo"
            width={480}
            height={360}
            />
        </div>
    )
}