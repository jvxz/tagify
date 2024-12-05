"use client";
import { TooltipButton } from "@/components/ui/tooltip-button";
import useModeStore from "@/lib/store/mode";
import { Loader2, Save } from "lucide-react";
import saveTags from "@/lib/save-tags";
import useFileStore from "@/lib/store/files";
import { useToast } from "@/hooks/use-toast";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { JollyTextField, TextField } from "@/components/ui/textfield";
import { Label } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { type FormEvent, useEffect, useState } from "react";
import { Form } from "react-aria-components";
export default function SidebarSaveButton() {
  const { mode, setMode } = useModeStore();
  const { selectedFile } = useFileStore();
  const { toast } = useToast();
  const [name, setName] = useState(selectedFile?.file.name);

  useEffect(() => {
    setName(selectedFile?.file.name);
  }, [selectedFile]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    console.log(e);
    e.preventDefault();
    if (!selectedFile) return;

    toast({
      title: "Saving edited file...",
    });
    setMode({ ...mode, saving: true });
    await saveTags(selectedFile.file, selectedFile.tags!, name ?? "untitled")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
    setMode({ ...mode, saving: false });
  }

  return (
    <DialogTrigger>
      <TooltipButton
        isDisabled={!mode.edited || mode.saving}
        placement="left"
        tooltip="Save"
        variant="default"
      >
        {mode.saving ? <Loader2 className="size-4 animate-spin" /> : <Save />}
      </TooltipButton>
      <DialogOverlay>
        <DialogContent>
          {({ close }) => (
            <Form
              onSubmit={async (e) => {
                await handleSubmit(e);
                close();
              }}
            >
              <DialogHeader>
                <DialogTitle>Save file</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                {/* <TextField autoFocus>
                  <Label>File name</Label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </TextField> */}
                <JollyTextField
                  errorMessage="You must provide a file name."
                  label="File name"
                  value={name}
                  isRequired
                  onChange={(e) => setName(e)}
                />
                <p className="text-sm opacity-50">
                  (.mp3 extension is not necessary)
                </p>
              </div>
              <DialogFooter className="flex items-center justify-between">
                <Button
                  size="sm"
                  variant="outline"
                  onPress={close}
                  type="button"
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  // onPress={}
                  type="submit"
                >
                  Save
                </Button>
              </DialogFooter>
            </Form>
          )}
        </DialogContent>
      </DialogOverlay>
    </DialogTrigger>
  );
}
