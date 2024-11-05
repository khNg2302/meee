import { AllSpaceBox } from "@/components/AllSpaceBox";
import { Form } from "@/components/Form";
import { FormElement } from "@/components/FormElement";

export const SidebarTools = () => {
  return (
    <div className="mt-2 flex flex-col">
      <Form>
        {() => (
          <FormElement label="" elementIcon={<div>Search</div>}>
            <input placeholder="Chat name" />
          </FormElement>
        )}
      </Form>
      <AllSpaceBox className="mt-2">
        Tools
      </AllSpaceBox>
    </div>
  );
};
