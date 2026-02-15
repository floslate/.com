import { Document, BLOCKS, INLINES, MARKS, Node } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import React from "react";

interface RichTextProps {
    document: Document | null | undefined;
}

const options = {
    renderMark: {
        [MARKS.BOLD]: (text: React.ReactNode) => <span className="font-bold">{text}</span>,
        [MARKS.ITALIC]: (text: React.ReactNode) => <span className="italic">{text}</span>,
        [MARKS.UNDERLINE]: (text: React.ReactNode) => <span className="underline">{text}</span>,
        [MARKS.CODE]: (text: React.ReactNode) => (
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                {text}
            </code>
        ),
    },
    renderNode: {
        [BLOCKS.HEADING_1]: (node: Node, children: React.ReactNode) => (
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-8 mb-4 first:mt-0">
                {children}
            </h1>
        ),
        [BLOCKS.HEADING_2]: (node: Node, children: React.ReactNode) => (
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-8 mb-4">
                {children}
            </h2>
        ),
        [BLOCKS.HEADING_3]: (node: Node, children: React.ReactNode) => (
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6 mb-3">
                {children}
            </h3>
        ),
        [BLOCKS.HEADING_4]: (node: Node, children: React.ReactNode) => (
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6 mb-3">
                {children}
            </h4>
        ),
        [BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => (
            <p className="leading-7 not-first:mt-6 mb-4">
                {children}
            </p>
        ),
        [BLOCKS.UL_LIST]: (node: Node, children: React.ReactNode) => (
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                {children}
            </ul>
        ),
        [BLOCKS.OL_LIST]: (node: Node, children: React.ReactNode) => (
            <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
                {children}
            </ol>
        ),
        [BLOCKS.LIST_ITEM]: (node: Node, children: React.ReactNode) => (
            <li>{children}</li>
        ),
        [BLOCKS.QUOTE]: (node: Node, children: React.ReactNode) => (
            <blockquote className="mt-6 border-l-2 border-primary pl-6 italic text-muted-foreground">
                {children}
            </blockquote>
        ),
        [BLOCKS.HR]: () => <hr className="my-8 border-muted" />,
        [INLINES.HYPERLINK]: (node: Node, children: React.ReactNode) => {
            const url = node.data.uri;
            return (
                <Link
                    href={url}
                    className="font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                    target={url.startsWith("http") ? "_blank" : undefined}
                    rel={url.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                    {children}
                </Link>
            );
        },
    },
};

export function RichText({ document }: RichTextProps) {
    if (!document) {
        return null;
    }

    return <>{documentToReactComponents(document, options)}</>;
}
