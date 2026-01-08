import React, { useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import type { ListingAction, ListingState } from "../../../types";
import FormLabel from "../../ui/FormLabel";
import SegmentedControl from "../../ui/SegmentedControl";
import AiChatAssistant from "./AiChatAssistant";

interface FormProps {
    state: ListingState;
    dispatch: React.Dispatch<ListingAction>;
    onComplete: () => void;
}

const DescriptionForm = ({ state, dispatch, onComplete }: FormProps) => {
    const [lang, setLang] = React.useState<'en' | 'ar'>('en');

    useEffect(() => {
        // يكتمل القسم عند إدخال العنوان والوصف (على الأقل بالإنجليزية)
        if (state.title && state.title.trim().length > 0 &&
            state.description && state.description.trim().length > 0) {
            onComplete();
        }
    }, [state.title, state.description, onComplete]);

    const [showAi, setShowAi] = React.useState(false);

    const titleKey = lang === 'en' ? 'title' : 'title_ar' as keyof ListingState;
    const descKey = lang === 'en' ? 'description' : 'description_ar' as keyof ListingState;

    return (
        <div className="space-y-6">
            <SegmentedControl
                options={[
                    { label: 'English', value: 'en' },
                    { label: 'Arabic', value: 'ar' }
                ]}
                value={lang}
                onChange={(val) => setLang(val as 'en' | 'ar')}
            />

            <FormLabel text={lang === 'en' ? "Title" : "العنوان"}>
                <input
                    type="text"
                    className="w-full p-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                    value={state[titleKey] as string}
                    onChange={e => dispatch({ type: 'UPDATE_FIELD', field: titleKey, value: e.target.value })}
                    dir={lang === 'ar' ? 'rtl' : 'ltr'}
                />
            </FormLabel>

            <FormLabel text={lang === 'en' ? "Description" : "الوصف"}>
                <textarea
                    rows={8}
                    className="w-full p-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 resize-none"
                    value={state[descKey] as string}
                    onChange={e => dispatch({ type: 'UPDATE_FIELD', field: descKey, value: e.target.value })}
                    dir={lang === 'ar' ? 'rtl' : 'ltr'}
                />
            </FormLabel>

            <button
                onClick={() => setShowAi(true)}
                className="bg-white border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-50 transition shadow-sm"
            >
                <Sparkles size={16} className="text-violet-600" />
                Generate with AI
            </button>

            <AiChatAssistant
                isOpen={showAi}
                onClose={() => setShowAi(false)}
                currentDescription={state.description}
                onAcceptContent={(content: any) => {
                    dispatch({
                        type: 'SET_STATE',
                        payload: {
                            title: content.title,
                            title_ar: content.title_ar,
                            description: content.description,
                            description_ar: content.description_ar
                        }
                    });
                    setShowAi(false);
                }}
                listingState={state}
            />
        </div>
    );
};
export default DescriptionForm;