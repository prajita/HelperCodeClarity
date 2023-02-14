import React, {useContext} from "react";
import Button from "../../components/Button";
import { LabelContext } from "../../components/Stepper/labelDataContext";
import ArticleStepOne from "../ArticleStepOne";

const ArticleData =()=>{
    const value = useContext(LabelContext);
    return(
        <div>
            <ArticleStepOne data={value}/>
            <div className="btn-group-actions">
                <Button
                        disabled={false}
                        onClick={() => value.prevPage()}
                    >
                        Previous
                </Button>
                <div className="btn-group-actions-right">
                    <Button
                        disabled={false}
                        onClick={() => value.cancel()}
                        >
                            Cancel
                    </Button>
                    <Button
                        disabled={false}
                        onClick={() => value.saveDraft()}
                        >
                            Save Draft
                    </Button>
                    <Button
                        disabled={false}
                        onClick={() => value.nextPage()}
                        >
                            Next
                    </Button>
                    
                </div>
            </div>
        </div>
    )
}

export default ArticleData;
