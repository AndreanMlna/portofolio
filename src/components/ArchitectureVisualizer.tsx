import React, { useState } from "react";
import { Cpu, Terminal, Layers, Database, Sparkles, CheckCircle2, Play } from "lucide-react";

interface PipelineStep {
  name: string;
  metric: string;
  detail: string;
  status: "active" | "ready" | "verified";
}

const ARCHITECTURES = [
  {
    id: "rag",
    label: "Agentic RAG Pipeline",
    badge: "THESIS RESEARCH",
    title: "Autonomous Agentic Retrieval-Augmented Generation",
    description: "Self-correcting semantic search engine combining HNSW vector indexes with a ReAct multi-step reasoning loop. Evaluated with Ragas for 98.6% answer faithfulness and zero hallucination drift.",
    metrics: [
      { label: "Vector Search", value: "0.942 Cosine" },
      { label: "Query Latency", value: "18.4ms" },
      { label: "Faithfulness", value: "98.6%" },
      { label: "Embedding Model", value: "MiniLM-L6-v2" }
    ],
    steps: [
      { name: "Document Ingestion & Chunking", metric: "512 tokens", detail: "SentencePiece semantic boundary normalization", status: "verified" },
      { name: "High-Dimensional Vectorization", metric: "384-dim", detail: "all-MiniLM-L6-v2 embedding generation", status: "verified" },
      { name: "HNSW Hierarchical Search", metric: "Top-5 K-NN", detail: "Cosine distance with sub-millisecond retrieval", status: "verified" },
      { name: "Autonomous ReAct Loop", metric: "3 Iterations", detail: "Thought → Action → Observation verification pass", status: "active" },
      { name: "Grounded Synthesis", metric: "Zero Drift", detail: "Context-anchored LLM response generation", status: "ready" }
    ],
    terminalLog: `[SYSTEM::INIT] Loading RAG vector index from /faiss_hnsw_store...
[EMBEDDINGS] Initialized MiniLM-L6-v2 (384 dimensions)
[QUERY_INPUT] "Optimasi performa pengenalan karakter berbasis edge computing"
[HNSW_INDEX] Query projected in 1.84ms | Distance: 0.9421 (Confidence: HIGH)
[REACT_AGENT] Evaluating evidence context across 5 retrieved segments...
[REASONING] Multi-step fact check passed: 0 contradiction detected.
[OUTPUT_STREAM] Generating response with grounded citation telemetry...`
  },
  {
    id: "cnn",
    label: "Aksara Jawa CNN Vision",
    badge: "DEEP LEARNING",
    title: "High-Accuracy Edge Optical Character Recognition",
    description: "Custom convolutional neural network trained on heterogeneous ancient script datasets. Quantized for sub-15ms edge inference with 98.4% character classification accuracy.",
    metrics: [
      { label: "Model Accuracy", value: "98.40%" },
      { label: "Inference Time", value: "12.6ms" },
      { label: "Quantization", value: "INT8 ONNX" },
      { label: "Script Classes", value: "20 Dasar + Pasangan" }
    ],
    steps: [
      { name: "Adaptive Binarization", metric: "Otsu Dynamic", detail: "Threshold filtering for low-contrast historical parchment", status: "verified" },
      { name: "Contour Segmentation", metric: "Morphological", detail: "Isolating ligatures, sandhangan, and baseline characters", status: "verified" },
      { name: "Deep CNN Feature Extractor", metric: "4 Conv Blocks", detail: "Depthwise separable convolutions + BatchNorm", status: "verified" },
      { name: "Softmax Classification", metric: "98.4% Acc", detail: "Top-1 probability score assignment", status: "active" },
      { name: "Latin Transliteration", metric: "Unicode Map", detail: "Direct conversion to standard Indonesian phonetics", status: "ready" }
    ],
    terminalLog: `[CV_PIPELINE] Reading input raster buffer: 1024x768 grayscale
[PREPROCESS] Adaptive bilateral filter applied | Contrast boost: +34%
[SEGMENTATION] Extracted 14 bounding boxes along text baseline
[INFERENCE] Running ONNX runtime session on edge CPU...
[PREDICTION] Token #1: 'ha' (0.998) | Token #2: 'na' (0.989) | Token #3: 'ca' (0.979)
[BENCHMARK] Total forward pass: 12.62ms | Memory footprint: 18.2MB`
  },
  {
    id: "sembako",
    label: "Sembako-Chain AI",
    badge: "BI HACKATHON 2026",
    title: "Supply Chain Demand & Price Prediction Telemetry",
    description: "Predictive price and supply anomaly detector created for staple goods distribution in regional markets during the Bank Indonesia DIGDAYA 2026 challenge.",
    metrics: [
      { label: "Forecast Horizon", value: "14-Day Lead" },
      { label: "MAPE Error", value: "3.12%" },
      { label: "Data Pipeline", value: "Realtime API" },
      { label: "Framework", value: "Prophet + LightGBM" }
    ],
    steps: [
      { name: "Market Ingestion Feed", metric: "34 Commodities", detail: "Automated daily wholesale price scrapers", status: "verified" },
      { name: "Outlier & Seasonality Split", metric: "IQR Cleaning", detail: "Holiday surge and weather disturbance weighting", status: "verified" },
      { name: "Ensemble Forecasting", metric: "LightGBM", detail: "Multi-variate price prediction with macroeconomic signals", status: "active" },
      { name: "Early Warning Anomaly Trigger", metric: "Z-Score > 2.0", detail: "Real-time SMS & Telegram alert dispatcher for regulators", status: "ready" }
    ],
    terminalLog: `[DATA_FEED] Synchronizing market price index for 34 regional hubs...
[SEASONALITY] Detected Ramadan / Eid surge pattern (+14.2% demand offset)
[ENSEMBLE_PREDICTOR] Running LightGBM regressor with historical 3-year baseline
[FORECAST] Rice Grade I projected at Rp 14,850/kg (Upper CI: Rp 15,200)
[ANOMALY_STATUS] Volatility index normal (Z-score: 0.42) | Stability: PASS`
  }
];

export function ArchitectureVisualizer() {
  const [activeTab, setActiveTab] = useState(ARCHITECTURES[0].id);
  const current = ARCHITECTURES.find((a) => a.id === activeTab) || ARCHITECTURES[0];

  return (
    <section id="architecture" style={{ padding: '100px 24px', backgroundColor: '#000000', position: 'relative' }}>
      <div className="boundary-guidelines" style={{ padding: '0 32px' }}>
        {/* Reticles */}
        <span className="reticle-corner reticle-tl">+</span>
        <span className="reticle-corner reticle-tr">+</span>
        <span className="reticle-corner reticle-bl">+</span>
        <span className="reticle-corner reticle-br">+</span>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="telemetry-tag" style={{ marginBottom: '16px' }}>
            <Cpu size={12} style={{ color: '#00F0FF' }} />
            <span>SYSTEM TELEMETRY ENGINE</span>
          </div>
          <h2 className="font-display metallic-heading" style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, letterSpacing: '-0.03em' }}>
            Live Architectural Pipelines
          </h2>
          <p className="font-body" style={{ color: '#94A3B8', fontSize: '15px', maxWidth: '640px', margin: '12px auto 0' }}>
            Interactive blueprint of core artificial intelligence models and high-throughput backend pipelines engineered with precision.
          </p>
        </div>

        {/* Console Container with Doppelrand Frame */}
        <div className="doppelrand-card" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="inner-core" style={{ padding: '0', overflow: 'hidden' }}>
            
            {/* Top Toolbar / Tabs */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              backgroundColor: '#08080c',
              padding: '12px 20px'
            }}>
              {/* Window Dots */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
                <span className="font-mono" style={{ fontSize: '11px', color: '#64748B', marginLeft: '12px' }}>
                  CONSOLE::PIPE_TELEMETRY_V2
                </span>
              </div>

              {/* Selector Tabs */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {ARCHITECTURES.map((arch) => (
                  <button
                    key={arch.id}
                    onClick={() => setActiveTab(arch.id)}
                    className="font-mono"
                    style={{
                      padding: '6px 14px',
                      borderRadius: '9999px',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      border: activeTab === arch.id ? '1px solid #00F0FF' : '1px solid rgba(255, 255, 255, 0.08)',
                      backgroundColor: activeTab === arch.id ? 'rgba(0, 240, 255, 0.12)' : 'transparent',
                      color: activeTab === arch.id ? '#00F0FF' : '#94A3B8',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {arch.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Stage Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              padding: '32px'
            }}>
              {/* Left Column: Spec & Metric Grid */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <div className="telemetry-tag" style={{ color: '#00F0FF', borderColor: 'rgba(0, 240, 255, 0.3)', marginBottom: '10px' }}>
                    {current.badge}
                  </div>
                  <h3 className="font-display" style={{ fontSize: '24px', fontWeight: 600, color: '#FFFFFF', marginBottom: '8px' }}>
                    {current.title}
                  </h3>
                  <p className="font-body" style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.6 }}>
                    {current.description}
                  </p>
                </div>

                {/* Metric Strip */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  {current.metrics.map((m, idx) => (
                    <div key={idx} style={{
                      backgroundColor: '#050508',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '8px',
                      padding: '12px'
                    }}>
                      <div className="font-mono" style={{ fontSize: '10px', color: '#64748B', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                        {m.label}
                      </div>
                      <div className="font-mono" style={{ fontSize: '15px', color: '#00F0FF', fontWeight: 600, marginTop: '2px' }}>
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pipeline Step Trace */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
                  <div className="font-mono" style={{ fontSize: '11px', color: '#64748B', letterSpacing: '0.08em' }}>
                    EXECUTION PIPELINE NODES
                  </div>
                  {current.steps.map((s, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      backgroundColor: '#08080c',
                      borderRadius: '8px',
                      border: s.status === 'active' ? '1px solid rgba(0, 240, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.06)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span className="font-mono" style={{ fontSize: '11px', color: '#64748B' }}>0{idx + 1}</span>
                        <div>
                          <div className="font-body" style={{ fontSize: '13px', fontWeight: 500, color: '#F1F5F9' }}>{s.name}</div>
                          <div className="font-body" style={{ fontSize: '11px', color: '#94A3B8' }}>{s.detail}</div>
                        </div>
                      </div>
                      <span className="font-mono" style={{
                        fontSize: '11px',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        backgroundColor: s.status === 'active' ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                        color: s.status === 'active' ? '#00F0FF' : '#94A3B8'
                      }}>
                        {s.metric}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Live Terminal Output Log */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  backgroundColor: '#040406',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  padding: '16px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Terminal size={14} style={{ color: '#10B981' }} />
                      <span className="font-mono" style={{ fontSize: '11px', color: '#A1A1AA' }}>telemetry_worker.log</span>
                    </div>
                    <span className="font-mono" style={{ fontSize: '10px', color: '#10B981' }}>● STREAMING</span>
                  </div>

                  <pre className="font-mono" style={{
                    fontSize: '12px',
                    lineHeight: '1.7',
                    color: '#93C5FD',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    flex: 1
                  }}>
                    {current.terminalLog}
                  </pre>

                  <div style={{
                    marginTop: '16px',
                    padding: '10px 12px',
                    backgroundColor: 'rgba(0, 240, 255, 0.05)',
                    border: '1px dashed rgba(0, 240, 255, 0.3)',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <CheckCircle2 size={16} style={{ color: '#00F0FF', flexShrink: 0 }} />
                    <span className="font-body" style={{ fontSize: '12px', color: '#E2E8F0' }}>
                      Architecture deployed and running with real-time health telemetry.
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
