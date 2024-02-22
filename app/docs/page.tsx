import { title } from "@/components/primitives";
import { Divider } from "@nextui-org/divider";
import ImageApp from './Tutor'
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { color } from "framer-motion";
export default function DocsPage() {
	return (
		<div>
			<h1 className={title({ color: 'violet' })}>Petunjuk instalasi</h1>
			<Divider />

			<Card className="py-4 bg-slate-500/20 backdrop-blur-sm rounded-xl" isBlurred>
				<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
					<p className="text-tiny uppercase font-bold w-fit inline">Cara Instal
						<small className="text-default-500 inline w-fit mx-1 italic lowercase">di</small>
					</p>
					<h4 className="font-bold text-large bg-clip-text from-cyan-500 to-blue-800 bg-gradient-to-bl text-transparent">Android Browser</h4>
				</CardHeader>
				<CardBody className="overflow-visible py-2">


					<ImageApp source={"/tutor/instal-android.gif"} />
				</CardBody>
			</Card>
			<Card className="py-4 bg-slate-500/20 backdrop-blur-sm rounded-xl" isBlurred>
				<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
					<p className="text-tiny uppercase font-bold w-fit inline">Cara Instal
						<small className="text-default-500 inline w-fit mx-1 italic lowercase">di</small>
					</p>
					<h4 className="font-bold text-large bg-clip-text from-cyan-500 to-blue-800 bg-gradient-to-bl text-transparent">Desktop Browser/Chrome</h4>
				</CardHeader>
				<Divider className="my-3" />
				<CardBody className="overflow-visible py-2">


					<ImageApp source={"/tutor/instal.gif"} />
				</CardBody>
			</Card>

		</div>
	);
}
