import { SVGPoweredByStripe } from "assets/svg/PoweredByStripe";
import Button from "views/atoms/Button/Button";

function ModalFooter({actionTitle, handleCancel, handleAction}:any) {
    return (
        <footer className="flex flex-col">
            <div className="flex flex-row items-center space-x-2 mb-5">
                <Button variant="primary" kind="outline" block onClick={(e:any) => handleCancel(e)}>Cancel</Button>
                <Button variant="primary" kind="solid" type="submit" block onClick={(e:any) => handleAction(e)}>{actionTitle}</Button>
            </div>
            <div className="w-full text-center">
                <div className="h-4">
                <SVGPoweredByStripe />
                </div>
            </div>
        </footer>
    )
}
export default ModalFooter;